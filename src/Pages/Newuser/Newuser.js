import './Newuser.css'

const Newuser = () => {
    return (
        <>
            <div className='newUser'>
                <h1 className='newUserTitle'>New User</h1>
                <form className='newUserForm'>
                    <div className='newUserItem'>
                        <label>Username</label>
                        <input type="text" placeholder='shamas'></input>
                    </div>
                    <div className='newUserItem'>
                        <label>Full Name</label>
                        <input type="text" placeholder='shamas karamat'></input>
                    </div>
                    <div className='newUserItem'>
                        <label>Email</label>
                        <input type="text" placeholder='shamaskaramat@gmail.com'></input>
                    </div>
                    <div className='newUserItem'>
                        <label>Password</label>
                        <input type="password" placeholder='password'></input>
                    </div>
                    <div className='newUserItem'>
                        <label>Phone</label>
                        <input type="text" placeholder='92 313 4136 523'></input>
                    </div>
                    <div className='newUserItem'>
                        <label>Address</label>
                        <input type="text" placeholder='Shalamar Garden Lahore'></input>
                    </div>
                    <div className='newUserItem'>
                        <label>Gender</label>
                        <div className='newUserGender'>
                            <input type="radio" id="male" value="male"></input>
                            <label for="male">Male</label>
                            <input type="radio" id="Female" value="Female"></input>
                            <label for="female">Female</label>
                            <input type="radio" id="Other" value="Other"></input>
                            <label for="other">Other</label>
                        </div>
                    </div>
                    <div className='newUserItem'>
                            <label>Active</label>
                            <select className='newUserSelect' name='active' id="active">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <br/>
                        <button className='newUserButton'>Create</button>     
                </form>
               
            </div>
        </>
    )
}

export default Newuser