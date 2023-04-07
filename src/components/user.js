import React, { useEffect, useState } from "react";
import { useQuery} from "@apollo/client";
import { getUsers, getUser ,getUserByRoles   } from "../queries/userQuery";

import { BsSearch } from "react-icons/bs";
import UserDisplay from "../helperComponents/userDisplay";
import '../styles/button.css'

const User = () => {
  const [value, setValue] = useState();
  const [emailValue, setEmailValue] = useState("arslan.ahmad@merch.com");
   const [selectedOption, setSelectedOption] = useState('client');
  const { loading:loadingUsers, data:dataUsers } = useQuery(getUsers);
  const { loading:loadingUser, data:dataUser  } = useQuery(getUser, {
    variables: { email: emailValue}
  });
  const {loading:userByRoleloading , data:userByRoleData} = useQuery(getUserByRoles ,{
    variables : {role:selectedOption}
  })

  const handleSelectOption = (event) => {
    setSelectedOption(event.target.value);
  };



  const [isDisplay, setIsDisplay] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleDisplay = () => {
    setIsDisplay(!isDisplay);
  };

  const handleSearch = (event) => {
    setEmailValue(value);
  };

  const displayUsers = (loading, data) => {
    if (loading) return <div>Data is loading ... </div>;
    else {
      return (
        <div>
          {data["getUsers"]?.map((_user) => {
            return (
              <UserDisplay
                Id={_user._id}
                first_name={_user.userInfo["firstName"]}
                last_name={_user.userInfo["lastName"]}
                Email={_user.userInfo["email"]}
              />
            );
          })}
        
        </div>
      );
    }
  };

  const displayUser = (loading, data) => {
    if (loading) return <div> Data is loading ... </div>;
    else {
        console.log('data',data)
      return (
        <div>

              <UserDisplay
                Id={data["getUser"]._id}
                first_name={data["getUser"].userInfo["firstName"]}
                last_name={data["getUser"].userInfo["lastName"]}
                Email={data["getUser"].userInfo["email"]}
              />
         
       
        
        </div>
      );
    }
  };

  const displayUserByrole = (loading,data) =>{
    if (loading) return <div> Data is loading ... </div>;
    else {

      return (
        
        <div>
          {data["getUsersByRole"]?.map((_user) => {
            console.log(_user);
            return (
              <UserDisplay
                Id={_user._id}
                first_name={_user.userInfo["firstName"]}
                last_name={_user.userInfo["lastName"]}
                Email={_user.userInfo["email"]}
              />
            );
          })}
        
        </div>
      );
    }

  }


  return (
    <>
    <div className="container">
      <div style={{margin:"50px"}}>
        <button className="button" onClick={handleDisplay}>
          <BsSearch className="icon" /> Get User
        </button>

        {isDisplay && (
          <div className="user-container">
            {displayUsers(loadingUsers, dataUsers)}
          </div>
        )}
      </div>

      <div style={{margin:"20px"}}>
        <label htmlFor="input-field">Enter text:</label>
        <div className="input-container">
          <input
            type="text"
            id="input-field"
            value={value}
            onChange={handleChange}
          />
          <button className="submit-button" onClick={handleSearch}>
            Submit
          </button>
        </div>

        <div className="user-container">
          {displayUser(loadingUser, dataUser)}
        </div>
      </div>
      <div style={{marginLeft:"80px"}}>
          <select
            value={selectedOption}
            onChange={handleSelectOption}
            className="select-dropdown"
          >
            <option value="client">Client</option>
            <option value="administrator">Administrator</option>
          </select>
          <div className="user-container">
            {displayUserByrole(userByRoleloading, userByRoleData)}
          </div>
        </div>
    </div>
  </>
  );
};
export default User;