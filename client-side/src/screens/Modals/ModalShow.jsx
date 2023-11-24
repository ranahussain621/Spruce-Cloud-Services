import React,{useState,useEffect} from "react";
import "../../style/LoginModal.css";
import "../../style/modalTable.css";
import {baseURL} from "../../axios/axios";
import ProjectImg1 from "../../assets/img/card_img.png";
import {instance} from '../../axios/axios'

function ModalShow(props) {
  const { isOpen, handleClose } = props;

  const [comparePkg, setComparePkg] = useState([])

  useEffect(() => {
    const comparePackage = async () => {
      const response = await instance.post(
        "packages/get-compare-items", { package_id: JSON.parse(localStorage.getItem('compareList')) || [] }
      );
      

      setComparePkg(response?.data?.packages);
    };
    comparePackage()
  }, [])

  
const RemovePackage=(id)=>{

  const updatedCompareList = JSON.parse(localStorage.getItem('compareList')).filter((pkgId) => pkgId !== id);
 
  

  localStorage.setItem('compareList', JSON.stringify(updatedCompareList));

  setComparePkg(comparePkg.filter((pkg) => pkg[0].id !== id));

   const getArray= JSON.parse(localStorage.getItem('compareList'))
   if(getArray?.length===0){
    handleClose()
   }
}
  return (
 <div className={isOpen ? "modal-show-compare display-block" : "modal-show-compare display-none"} style={{marginTop:'30px'}}>
      <div className="modal-content-compare rounded-0">
    

<div className="col-12" >
            <div >
            {props.compareListFull && <p style={{color:'#dd0000',fontFamily: 'Axiforma', paddingTop:'10px',
                    fontWeight: 500,  }}>Compare Item List Exceeded</p>}

              <table className="modal-table" >
                <thead >
                  <tr >
                    <th className='side-tabs Montserrat'>Title</th>
                    {comparePkg.map((item, index) => (
                      <th className='col Montserrat ' key={index}>
                        <div className="row m-0">
                          <div className="col-7 m-0 p-0 text-end"> {item[0].title}</div>
                          <div className="col-5 m-0 p-0 text-end">
                            <button type="button" className="btn-close text-end" aria-label="Close" onClick={() => RemovePackage(item[0].id)}></button>
                          </div>
                        </div>
                        
                        
                       </th>
                    ))}



                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='side-tabs Montserrat' >Image</td>

                    {comparePkg.map((item, index) => {
                        const packImage = item[0].image
              return(

                          <td className='col text-center' key={index}>
                           {item[0].image? (<img style={{ width: '270px' }} className='img-fluid' src={packImage} alt="" />)
                           :
                           (<img style={{ width: '270px' }} className='img-fluid' src={ProjectImg1} alt="" />)}
      
                           </td>
)
                    
                    }
                     
                    )}


                  </tr>
                  <tr>
                    <td className='side-tabs Montserrat'>Price</td>
                    {comparePkg.map((item, index) => (
                      <td className='Montserrat text-center' key={index}>CAD {item[0].price}</td>
                    ))}

                  </tr>
                  <tr>
                    <td className='side-tabs Montserrat'>Attribute</td>

                    {comparePkg?.map((item) => {
                      return (
                        <>

                          {item[0]?.attributes?.length === 0 ||
                          !item[0]?.attributes ? (
                            <td className="text-center">...</td>
                          ) : (
                            <td className="mt-4 mb-4 Montserrat text-center">
                              {item[0]?.attributes?.map((attribute, index) => {
                                return (
                                  <span key={index}>
                                    {attribute.name}
                                    {index !==
                                      item[0]?.attributes?.length - 1 && ", "}
                                  </span>
                                );
                              })}
                            </td>
                          )}




                        </>)
                    })
                    }
                  </tr>
                </tbody>
              </table>



            </div>
            <div className="row mt-3 p-0 ">
              <div className="col text-end"><button type='buttom' onClick={handleClose} className='btn btn-primary '>Compare</button></div>
            </div>
          </div>






       
      </div>
    </div>
  );
}

export default ModalShow;
