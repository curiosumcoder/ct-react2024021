import {useEffect} from 'react'
import useProductSearch from "../hooks/useProductSearch";

const withProductSearch = (WrappedComponent: any, filter:string) => {
  return (...props: any) => {
    const [{ data, isProcessing, isError }, doSearch] = useProductSearch();
    console.log(props);

    useEffect(()=>{
        doSearch(filter)
    },[doSearch])

    return (
      <>
        <WrappedComponent {...props} items={data}/>
      </>
    );
  };
};

export default withProductSearch;
