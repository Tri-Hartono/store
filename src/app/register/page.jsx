import Link from 'next/link';
import Image from 'next/image';
import ImageRegister from '../../../assets/images/register.jpg';
export default function Register() {
  return (
    <section className=" flex flex-col md:flex-row  rounded-lg overflow-hidden  md:h-[80vh] ">
      <div className=" md:w-1/2 h-auto  flex items-center justify-center">
        <Image src={ImageRegister} width={0} height={0} alt="Image Login" />
      </div>
      <div className="flex flex-col items-center justify-center md:w-1/2 h-auto   ">
        <div className="w-full  m-auto p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">Create Account</h1>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label htmlFor="email">Your email</label>
              <input type="email" name="email" id="email" placeholder="youremail@gmail.com" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" placeholder="your password" />
            </div>
            <div>
              <label htmlFor="confirm password">Confirm Password</label>
              <input type="password" name="password" id="password" placeholder="Confirm password" />
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border " />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-light ">
                  I accept the{' '}
                  <a className="font-medium text-zinc-800 hover:underline " href="#">
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <button type="submit" className="w-full text-white bg-blue-300">
              Create an account
            </button>
            <p className="text-sm font-light ">
              Already have an account?{' '}
              <Link href="/login" className="font-medium text-zinc-800 hover:underline ">
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
