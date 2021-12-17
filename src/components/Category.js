import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Category.css";

const Category = () => {
  const navigation = useNavigate();
  const { state } = useLocation();
  const [deliveryMode, setDeliveryMode] = useState(false);

  const goToWhere = () => {
    if (!deliveryMode) {
      navigation("/menu/packaging");
    } else {
      navigation("/choice-store");
    }
  };

  useEffect(() => {
    if (state !== null && state.delivery !== null) {
      setDeliveryMode(true);
    }
  }, []);

  return (
    <div className="wrap">
      <table className="table">
        <tbody>
          <tr>
            <td>
              <div onClick={goToWhere}>
                <img alt="카페디저트" src="img/카페디저트.jpg" />
              </div>
            </td>
            <td>
              <div>
                <img alt="분식" src="img/분식.jpg" />
              </div>
            </td>
            <td>
              <div>
                <img alt="패스트푸드" src="img/패스트푸드.jpg" />
              </div>
            </td>
            <td>
              <div>
                <img alt="한식" src="img/한식.jpg" />
              </div>
            </td>
            <td>
              <div>
                <img alt="치킨" src="img/치킨.jpg" />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <img alt="돈까스회일식" src="img/돈까스회일식.jpg" />
              </div>
            </td>
            <td>
              <div>
                <img alt="피자" src="img/피자.jpg" />
              </div>
            </td>
            <td>
              <div>
                <img alt="족발보쌈" src="img/족발보쌈.jpg" />
              </div>
            </td>
            <td>
              <div>
                <img alt="아시안양식" src="img/아시안양식.jpg" />
              </div>
            </td>
            <td>
              <div>
                <img alt="야식" src="img/야식.jpg" />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <img alt="도시락" src="img/도시락.jpg" />
              </div>
            </td>
            <td>
              <div>
                <img alt="중국집" src="img/중국집.jpg" />
              </div>
            </td>
            <td>
              <div>
                <img alt="찜탕" src="img/찜탕.jpg" />
              </div>
            </td>
            <td>
              <div>
                <img alt="맛집랭킹" src="img/맛집랭킹.jpg" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Category;
