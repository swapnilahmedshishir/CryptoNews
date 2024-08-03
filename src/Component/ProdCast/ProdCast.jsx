import { useContext, useState } from "react";
import ProdCastCard from "./ProdCastCard";
import { useEffect } from "react";
import axios from "axios";
import { AppContext } from "../../AppContext";

const ProdCast = () => {
  const { state } = useContext(AppContext);

  // state
  const [errorMessage, setErrorMessage] = useState(null);
  const [Podcasts, setPodcasts] = useState([]);

  // fetch data
  useEffect(() => {
    axios
      .get(`${state.port}/api/admin/Podcasts`)
      .then((result) => {
        if (result.data.Status) {
          setPodcasts(result.data.Result);
        } else {
          setErrorMessage(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, [state.port]);

  return (
    <div className="gap-6 xs:gap-8 lg:gap-10 p-6 xs:p-8 lg:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex-grow-0 flex-shrink-0 w-full">
      {/* Prodcast Maping*/}

      {Podcasts.length > 0 &&
        Podcasts.map((pd) => (
          <div
            className="shrink-0 grow-0 flex-none border min-w-[100px]"
            key={pd.ID}
          >
            <ProdCastCard prodCastCard={pd} />
          </div>
        ))}
    </div>
  );
};

export default ProdCast;
