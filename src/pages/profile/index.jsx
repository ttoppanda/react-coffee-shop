import React from "react";
import '../../css/profile.css';
import '../../css/global.css';
import ProfileLogo from '../../assets/profile-css/profile.png';
import EditLogo from '../../assets/profile-css/editlogo.png';
import logoHeader from '../../assets/smkopi.png';
import searchLogo from '../../assets/product-css/searchlogo.svg';
import chatLogo from '../../assets/product-css/chatlogo.svg';
import profileLogo from '../../assets/product-css/profilelogo.svg';

const Profile = () => {
    return (
        <div>
            <div className="topbar">
                <header className='left-topbar'>
                    <img src={logoHeader} alt='' className='kopi' />
                    <div className=''>Coffee Shop</div>
                </header>
                <div className='mid-topbar'>
                    <ul className='flex gap-5'>
                        <li>Home</li>
                        <li>Product</li>
                        <li>Your Cart</li>
                        <li>History</li>
                    </ul>
                </div>
                <div className='right-topbar'>
                    <img src={searchLogo} alt='' />
                    <img src={chatLogo} alt='' />
                    <img src={profileLogo} alt='' />
                </div>
            </div>
        <div className="content-profile">
    <h1 className="title-profile">User Profile</h1>
    <div className="card-profile">
        <div className="left-side">
            <img src={ProfileLogo} alt="" className="profileimg"/>
            <p className="profilename">Zulaikha</p>
            <p className="profileemail">zulaikha17@gmail.com</p>
            <div className="buttontabtop">
                <button form="updateProfile" value="upload" type="file" className="pointer uploadimg" id="upload">Choose Photo</button>
                <button className="pointer removeimg">Remove Photo</button>
                <button className="pointer editpass2">Edit Password</button>
            </div>
            <div className="buttonmobiletop">
                <button className="pointer uploadimg">Choose Photo</button>
                <button className="pointer removeimg">Remove Photo</button>
            </div>
            <button className="pointer editpass">Edit Password</button>
            <p className="profiletext">Do you want to save the change?</p>
            <div className="buttonmobilebottom">
                <button type="submit" form="updateProfile" className="pointer save">Save Change</button>
                <button className="pointer cancel">Cancel</button>
            </div>
            <div className="buttontabbottom">
                <button className="pointer save">Save Change</button>
                <button className="pointer cancel">Cancel</button>
                <button className="pointer logout2">Logout</button>
            </div>
            <button className="pointer logout">Logout</button>
        </div>
        <div className="right-side">
            <div className="card-rightside">
                <div className="one-rightside">
                    <form id="updateProfile" action="#" autoComplete="off" encType="multipart/form-data"/>
                        <input type="hidden" id="id_users"/>
                        <p className="profileheader">Contacts</p>
                        <p className="emailprofile">Email Address : </p>
                        <input type="email" id="email" placeholder="zulaikha17@gmail.com" className="email-profile" />
                        <p className="emailprofile">Delivery Address : </p>
                        <input type="text" id="address" placeholder="Iskandar Street no. 67 Block A Near Bus Stop"
                            className="delivery-profile"/>
                        <p className="profileheader">Details</p>
                        <p className="emailprofile">Display Name : </p>
                        <input type="text" id="display_name" placeholder="Zulaikha" className="delivery-profile"/>
                        <p className="emailprofile">First Name : </p>
                        <input type="text" id="first_name" placeholder="Zulaikha" className="delivery-profile"/>
                        <p className="emailprofile">Last Name : </p>
                        <input type="text" id="last_name" placeholder="Nirmala" className="delivery-profile"/>
                        <div className="displayonmobile">
                            <p className="mobilenumber2">Mobile number : </p>
                            <input type="number" id="phone_number" placeholder="(+62)813456782" className="number-profile"/>
                            <p className="birthdate2">DD/MM/YY</p>
                            <input type="date" id="birth_date" placeholder="03/04/90" className="number-profile"/>
                            <label htmlFor="female" className="checkmark">
                                <input type="radio" className="female2" name="gender" value="female"/>
                                <span className="ceklis">Female</span>
                            </label>
                        </div>
                        <label htmlFor="male" className="checkmark">
                            <input type="radio" className="male" name="gender" value="male" checked="checked"/>
                            <span className="ceklis">Male</span>
                        </label>
                        <div className="radiobtnonmobile">
                            <label htmlFor="male" className="checkmark2">
                                <input type="radio" className="male" name="gender" value="male" checked="checked"/>
                                <span className="ceklis">Male</span>
                            </label>
                            <label htmlFor="female" className="checkmark2">
                                <input type="radio" className="female" name="gender" value="female"/>
                                <span className="ceklis">Female</span>
                            </label>
                        </div>
                </div>
                <div className="two-rightside">
                    <img src={EditLogo} alt="edit" className="pointer edit-logo"/>
                    <p className="mobilenumber">Mobile number : </p>
                    <form method="post" action="">
                        <input type="number" placeholder="(+62)813456782" className="number-profile"/>
                    </form>
                    <p className="birthdate">DD/MM/YY</p>
                    <form method="post" action="">
                        <input type="date" placeholder="03/04/90" className="number-profile"/>
                    </form>
                    <label htmlFor="female" className="checkmark">
                        <input type="radio" className="female" name="gender" value="female"/>
                        <span className="ceklis">Female</span>
                    </label>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    )
}

export default Profile;