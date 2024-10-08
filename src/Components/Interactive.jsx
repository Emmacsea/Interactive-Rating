import star from "../assets/images/icon-star.svg";
import PropTypes from 'prop-types';



export default function Component ({
    onClickOne,
    onClickTwo,    
    onClickThree,    
    onClickFour,    
    onClickFive,  
    onClickRating,  
}) {
    return(
        <div className="bg-neutral-vdarkblue font-body flex justify-center items-center w-full h-screen">
            <div className="flex flex-col bg-neutral-darkblue w-96 h-auto rounded-lg p-6">
                <div className="rounded-full w-14 h-14 flex justify-center items-center bg-slate-600 mb-4">
                    <img className="w-7" src={star} alt="" />
                </div>

                <div>
                    <h2 className="text-neutral-white text-xl mb-2 font-medium">How did we do?</h2>
                    <p className="text-neutral-lightgrey text-sm font-medium">
                        Please let us know how we did with your support request. All feedback
                        is appreciated to help us improve our offering
                    </p>

                    <div className="flex items-center justify-between mt-5 w-full">
                    <div className="btndet">
                        <button className="btn"  onClick={onClickOne}>1</button>
                    </div>
                    <div className="btndet">
                        <button className="btn"  onClick={onClickTwo}>2</button>
                    </div>
                    <div className="btndet">
                        <button className="btn"  onClick={onClickThree}>3</button>
                    </div>
                    <div className="btndet">
                        <button className="btn"  onClick={onClickFour}>4</button>
                    </div>
                    <div className="btndet">
                        <button className="btn"  onClick={onClickFive}>5</button>
                    </div>
                   
                    </div>

                </div>

                <div className="mt-5 w-full">
                    <button className="hover:bg-neutral-white bg-primary-orange text-neutral-white hover:text-primary-orange text-base font-medium text-center uppercase rounded-full py-2 w-full" onClick={onClickRating} type="button">submit</button>
                </div>
            </div>
        </div>
    )
}
Component.propTypes = {
    onClickOne: PropTypes.func.isRequired,
    onClickTwo: PropTypes.func.isRequired,
    onClickThree: PropTypes.func.isRequired,
    onClickFour: PropTypes.func.isRequired,
    onClickFive: PropTypes.func.isRequired,
    onClickRating: PropTypes.func.isRequired,
}