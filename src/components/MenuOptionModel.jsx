// import useApiData from "../utils/useApiData";


// eslint-disable-next-line react/prop-types
const MenuOptionModel = ({ setMenuModel, variantData }) => {
    // const fData = useApiData();
    console.log(variantData);
    return (
        <div className="model-main fixed inset-0 bg-black/50 flex justify-center items-center">
            <div className="modelcard bg-white p-10 flex flex-col justify-between">
                <div className="heading">

                </div>
                <div className="variation">
                    <div className="radio">

                    </div>
                </div>
                <div className="button">

                </div>
                <button onClick={() => setMenuModel(false)}>close</button>
            </div>
        </div>
    )
}

export default MenuOptionModel
