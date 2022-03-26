import axios from "axios";

function GetNGData(response) {
  // Gets Carbon Data And Returns without Axios Fetch Data

  axios({
    method: "get",
    url: `https://data.nationalgrideso.com/api/3/action/datastore_search_sql?sql=SELECT * from "c16b0e19-c02a-44a8-ba05-4db2c0545a2a" LIMIT 5`, // Entire Api Route
    headers: { Accept: "application/json" },
    responseType: "json", // Expected Response Format
  })
    .then((Res) => {
      //console.log(Res.data.result.records[0]);
      response.send(Res.data.result.records[0]); // Returns All Data From API without Axios Data
    })
    .catch((err) => {
      console.log(err);
    });
}

export default GetNGData;