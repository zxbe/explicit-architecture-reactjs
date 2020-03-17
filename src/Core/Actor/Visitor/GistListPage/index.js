import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Gist from './Component/Gist/index.js';
import GistDTO from './GistDTO';
import GIST_LIST from './gistListQuery.graphql';

const GistList = () => {

  const { loading, error, data } = useQuery(GIST_LIST, {
    variables: {
      userName: `${ process.env.REACT_APP_GIT_HUB_USER }`,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const GistDtoList = data.user.gists.edges.map(node => {
      return new GistDTO(node);
    }
  )

  return GistDtoList.map(gistDto => {
      return <Gist key={ gistDto.id } gistDto={ gistDto }/>
    }
  );
}

export default GistList;
