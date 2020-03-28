import React from "react";
import User from "./User/User";
import * as axios from "axios";
import css from "./Users.module.css";

class Users extends React.Component {

  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(data => {
        this.props.setUsers(data.data.items);
        this.props.setTotalUsers(data.data.totalCount);
      });
  }

  changeCP = (i)=>{
    this.props.changeCurrentPage(i)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${i}&count=${this.props.pageSize}`)
      .then(data => {
        this.props.setUsers(data.data.items);
      });
  }

  setCss = (i)=>{
    return `${this.props.currentPage === i ? css.selected : css.page}` 
  }


  render() {
      let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize) ;
      let pages = [];
      for (let i = 1 ; i <= pagesCount ; i++ ){
      pages.push(<span 
            onClick={()=>{this.changeCP(i)}}
            className={this.setCss(i)}>{i}</span>)
    }
    return (
      <div>
        
        
        {this.props.users.map(user => (
          <User
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            url={user.photos}
            key={user.id}
            id={user.id}
            name={user.name}
            status={user.status}
            location={user.location}
            fol={user.followed}
          />
        ))}
        <div className={css.pages_wrapper}>
           {pages}
        </div>
        
      </div>
    );
  }
}

export default Users;
