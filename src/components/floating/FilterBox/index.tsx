import React, { useState } from "react";
import { Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { 
  MainBox,FilterBar,BoldTypo,ArrowBox,SearchBox,
  SearchBar,ResultBox,ResultTypo,PickBox,PickTag,RemoveBox
} from "./style";


import { temp1 } from "./data";

const FilterBox = () => {
  // 검색 기능
  const [resultList, setResultList] = useState([...temp1]);
  const searchHandler = (tx :string) => {
    setResultList([...temp1]);
    const tempList = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const obj of temp1) {
      const tempObj = {...obj}
      if(tempObj.name.indexOf(tx) > -1){
        tempObj.name = tempObj.name.replace(tx, `<b style='color:black'>${tx}</b>`);
        tempList.push(tempObj);
      }
    }
    setResultList([...tempList]);
  }

  // 검색창 노출
  const [filterState, setFilterState] = useState(true);
  const searchBoxOpen = () => {
    setResultList([...temp1]);
    setFilterState(()=>!filterState);
  }
  
  // 결과 선택 기능
  const [pinkList, setPinktList] = useState<string[]>([]);
  const pinkHandler = (tx :string) => {
    searchBoxOpen();
    const set = new Set([...pinkList, tx]);
    setPinktList([...Array.from(set)]);
  }

  return (
    <Box sx={{ mt: 5, ml: 15 }}>
      <MainBox onClick={searchBoxOpen}> 
        <FilterBar>
          <BoldTypo variant="body1">필터링할 언어 추가하기</BoldTypo>
          <ArrowBox sx={{
            backgroundImage : `url(/images/floating/filter_${  filterState ? "bottom" : "top"  }.png)`
          }} />
        </FilterBar>
      </MainBox>
      { !filterState 
      ?
        <SearchBox>
          <SearchBar onChange={(e)=>{
            searchHandler(e.target.value);
          }} />
          <SearchIcon sx={{ color: "#F5BF41",fontSize:"29px",position:"absolute" }}/>
          <ResultBox>
            {
              resultList && resultList.map((obj)=> {
                  return(
                    <ResultTypo
                      onClick={() => {pinkHandler(obj.origName)} }
                      key={obj.idx}
                      dangerouslySetInnerHTML={ {__html: obj.name} }
                    />
                  )
              })
            }
          </ResultBox>
        </SearchBox>
      : <PickBox>
          {
            pinkList && pinkList.map((tx)=> {
                return(
                  <>
                    <PickTag>{tx}</PickTag>
                    <RemoveBox>✖︎</RemoveBox>
                  </>
                )
            })
          }
        </PickBox>
      }
      {/* @@@ */}
      <div style={{height:"500px"}} />
    </Box>
  );
};

export default FilterBox;
