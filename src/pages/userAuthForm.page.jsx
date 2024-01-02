import Inputbox from "../components/input.component";
import googleIcon from "../imgs/google.png"
import { Link } from "react-router-dom";
import AnimateForm from "../common/page-animation"

const UserAuthForm = ({type}) => {
    return(

        <AnimateForm keyValue={type}>
            <section className="h-cover flex items-center justify-center">
                <form action="" className="w-[80%] max-w-[400px]">
                    <h1 className="text-4xl font-gelasio text-center capitalize mb-24">
                        {
                            type == "login" ? "Welcome back" : "Join Us Today"
                        }
                    </h1>
                    {
                        type == "signup" ? <Inputbox 
                        name="fullname"
                        type="text"
                        placeholder="Full Name"
                        icon="fi-sr-user-add"
                        /> : ""
                    }

                        <Inputbox 
                            name="email"
                            type="email"
                            placeholder="Email"
                            icon="fi-sr-envelope"
                        />

                        <Inputbox 
                            name="password"
                            type="password"
                            placeholder="Password"
                            icon="fi-sr-key"
                        />

                        <button className="btn-dark center mt-14" type="submit">
                            {type}

                        </button>

                        <div className="relative w-full flex items-center gap-2 my-10 opacity-40 uppercase font-bold text-black">
                            <hr className="w-1/2 border-black"/>
                            <p>or</p>
                            <hr className="w-1/2 border-black"/>
                        </div>

                        <button className="btn-dark flex items-center justify-center gap-4 w-[90%] center">
                            <img src={googleIcon} alt="" className="w-5"/>
                            continue with google
                        </button>
                        {
                            type == "signup" ? 
                            <p className="mt-6 text-xl text-dark-grey text-center">Already a member ?
                                <Link to="/login" className="underline text-xl text-black ml-1">
                                Login here 
                                </Link>
                            </p>
                            :
                                <p className="mt-6 text-xl text-dark-grey text-center">Don't have any account ?
                                
                                    <Link to="/signup" className="underline text-xl text-black ml-1">
                                        Join us today
                                    </Link>
                                </p>

                            
                        }
                </form>
            </section>
        </AnimateForm>
    )
}

export default UserAuthForm;