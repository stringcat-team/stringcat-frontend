import styled from '@emotion/styled';
import Head from 'next/head';
import type { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { RootStateInterface } from '../src/interfaces/redux/rootState';
import { ConfigState } from '../src/interfaces/redux/reducers/config.interfaces';

const StyledDiv = styled('div')(({ theme }) => ({
  background: 'black',
  color: theme.colors.primary,
  display: 'inline-block',
  padding: 8,
}));

const Index: NextPage = () => {
  const { mode } = useSelector((state: RootStateInterface): ConfigState => state.config);
  console.log('current mode is :', mode);
  return (
    <>
      <Head>
        <title>String Cat</title>
      </Head>
      <main>
        <StyledDiv>Hello String Cat</StyledDiv>
      </main>
    </>
  );
};

export default Index;
