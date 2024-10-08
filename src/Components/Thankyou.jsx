import thnk from "../assets/images/illustration-thank-you.svg";
import PropTypes from 'prop-types';

export default function Thankyou ({ratings}) {
    return(
        <div className="bg-neutral-vdarkblue font-body flex justify-center items-center w-full h-screen">
            <div className="flex flex-col justify-center items-center bg-neutral-darkblue w-80 h-auto rounded-2xl px-6 py-8">
               
                <div className="mb-5"><img src={thnk} alt="" /></div>
                

                <div className="flex flex-col justify-center items-center">
                    <p className="text-primary-orange text-base rounded-full font-medium bg-slate-600 py-2 px-5 text-center">You selected {ratings} out of 5</p>
                    <h2 className="text-neutral-white text-2xl font-semibold mt-4 mb-2">Thank you!</h2>

                    <p className="text-neutral-lightgrey text-base font-light text-center">
                        We appreciate you taking the time to give a rating. 
                        If you ever need more support, don&apos;t hesitate to get in touch!
                    </p>

                </div>


            </div>


        </div>
    )

}
Thankyou.propTypes = {
    ratings: PropTypes.string.isRequired,
}