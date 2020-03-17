import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GistAuthor, GistDate, GistDescription, GistTitle } from './index.styled';
import GIST from './gistQuery.graphql';

const Gist = ({match: {params: {name: gistName}}}) => {
  const { loading, error, data } = useQuery(GIST, {
    variables: {
      userName: `${ process.env.REACT_APP_GIT_HUB_USER }`,
      gistName: `${ gistName }`,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( ${error} </p>;

  const gistComponent = (({ id, name, description, createdAt, owner: { login } } ) => (
      <div key={ id }>
        <h2><GistTitle>{ name }</GistTitle></h2>
        <GistDate>{ createdAt }</GistDate> <GistAuthor>{ login }</GistAuthor>
        <GistDescription>{ description }</GistDescription>
      </div>
    )
  )

  return gistComponent(data.user.gist);
}

export default Gist;
