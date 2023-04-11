import React, { useEffect, useState , } from "react";
import { useQuery} from "@apollo/client";
import useDelayedState from "../lib/useDelayedHook";
import { getUsers, getUser ,getUserByRoles   } from "../queries/userQuery";
import { useDebouncedState } from 'usehooks-ts';
import { BsSearch } from "react-icons/bs";
import UserDisplay from "../helperComponents/userDisplay";
import '../styles/button.css'

const User = () => {
  const [value, setValue] = useState('initital state');
  const [counter , setCounter] = useState(0);
  const [delayValue , setDelayValue] = useState(3000)
  const [delayState, setDelayState] = useDebouncedState(0, delayValue);
  const [emailValue, setEmailValue] = useState("anas.raza+1@merch.com");
  const delayMs = 1000


   const [selectedOption, setSelectedOption] = useState('client');
  const { loading:loadingUsers, data:dataUsers } = useQuery(getUsers);
  const { loading:loadingUser, data:dataUser  } = useQuery(getUser, {
    variables: { email: emailValue},

  });
  const {loading:userByRoleloading , data:userByRoleData} = useQuery(getUserByRoles ,{
    variables : {role:selectedOption}
  })

  const handleSelectOption = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    },800);
    return () => clearInterval(interval);
  }, []);



  function setDelayedState(newValue) {
    setValue(newValue)
  }



useEffect(() => {
  console.log('delayedCounter', delayState);
},[delayState]);

  useEffect(()=>{

    if(counter >=1 && value !== "")
      setEmailValue(value)    
    else if(counter >=3 && value === "")
    setEmailValue("anas.raza+1@merch.com")
  })



  const [isDisplay, setIsDisplay] = useState(false);

  const handleChange = (event) => {
    event.preventDefault()
    setValue(event.target.value);
    setDelayValue(5000)
    setCounter(0)
  };

  const handleDisplay = () => {
    setIsDisplay(!isDisplay);
  };





  const handleSearch = (event) => {
    setDelayState(value)
};

  const displayUsers = (loading, data) => {
    if (loading) return <div>Data is loading ... </div>;
    else {
      return (
        <div>
          {data["getUsers"]?.map((_user) => {
            return (
              <UserDisplay
                Id={_user?._id}
                first_name={_user?.userInfo["firstName"]}
                last_name={_user?.userInfo["lastName"]}
                Email={_user?.userInfo["email"]}
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
      return (
        <div>
            {data !==undefined &&
              <UserDisplay
                Id={data["getUser"]?._id}
                first_name={data["getUser"]?.userInfo["firstName"]}
                last_name={data["getUser"]?.userInfo["lastName"]}
                Email={data["getUser"]?.userInfo["email"]}
              />
            }
       
        
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
        
            return (
              <UserDisplay
                Id={_user._id}
                first_name={_user?.userInfo["firstName"]}
                last_name={_user?.userInfo["lastName"]}
                Email={_user?.userInfo["email"]}
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
