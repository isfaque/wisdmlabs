import { Component, ViewChild} from '@angular/core';
import { IonInfiniteScroll} from '@ionic/angular';
import { UserService } from '../apis/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild(IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll;


  users = [];
  perPage = 20;
  pageNo = 0;
  maximumPages = 10;
  searchTerm : any = "";
  
  
  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.loadUsers();
  }

  //For search items
  setFilteredItems() {
    console.log(this.searchTerm);
    if(this.searchTerm==""){
      this.loadUsers()
    }
  }

  //For load user list
  loadUsers(infiniteScroll?) {
    this.userService.getUsers(this.perPage, this.pageNo).subscribe(res => {
      this.users = this.users.concat(res['results']);
      if (this.infiniteScroll) {
        this.infiniteScroll.complete();
      }
    })
  }

  //For load more
  loadMore(infiniteScroll) {
    this.pageNo++;
    this.loadUsers(infiniteScroll);
 
    if (this.pageNo === this.maximumPages) {
      infiniteScroll.enable(false);
    }
  }

  //For go to user details page
  goToUserDetails(item) {
    console.log(item);
    const data = {
      firstName : item.name.first,
      lastName : item.name.last,
      gender : item.gender,
      picture : item.picture.large,
      email : item.email,
      age : item.dob.age,
      phone : item.phone,
      city : item.location.city
    }
    this.router.navigate(['/tab1-details'],{
      queryParams: data,
      });
  }

}
