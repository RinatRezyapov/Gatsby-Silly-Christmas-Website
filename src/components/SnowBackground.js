import React, { useState } from "react";
import styled from 'styled-components';
import Sign from './Sign';
import Tree from './Tree';
import Deer from './Deer';

const StyledTable = styled.table`
  margin-left: auto;
  margin-right: auto;
  font-size: 0px;
`;

const Wrapper = styled.div`
  background-color: white;
`;

const TableWrapper = styled.div`
  position: absolute;
`;

const ObjectsWrapper = styled.div`
  position: absolute;
  width: 100%;
`;

let decoratedInit = false;

const SnowBackground = ({ snowStarted, onStartSnow }) => {

  const [decorated, setDecorated] = useState(decoratedInit);

  const onDecorateTrees = () => setDecorated(v => {
    decoratedInit = !v;
    return !v;
  });


  return (
    <Wrapper>
      <TableWrapper>
      <StyledTable border="0" cellPadding="0" cellSpacing="0">
        <tbody>
          <tr>
            <td width="360" height="8" colSpan="1" bgcolor="#E3EDF7">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#DFEBEC">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#DBE8F2">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#DDDDD9">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#E5E9E9">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043460">&nbsp;</td>
            <td width="360" height="8" colSpan="3" bgcolor="#053460">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043460">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043560">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043460">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053460">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#043460">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043461">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043560">&nbsp;</td>
            <td width="360" height="8" colSpan="5" bgcolor="#053460">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#043460">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#053460">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#043460">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053560">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053460">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043460">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053461">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043460">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053460">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053461">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043460">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#053460">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043460">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053460">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043460">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053560">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#053460">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053461">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053460">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053560">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043460">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053461">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#D8E7EA">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#D3E5E7">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#D0DEE3">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#D5EBF2">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#E8E9EA">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#D6DFE2">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#B9D1D1">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043460">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#053460">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#053560">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053460">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053461">&nbsp;</td>
          </tr>
          <tr>
            <td width="360" height="8" colSpan="1" bgcolor="#FBFAFB">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F7F8F4">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F7F4F9">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F6F3F6">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F3F4F6">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#EFF0F4">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053461">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043561">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#043460">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#053461">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043461">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043560">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053460">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053461">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043561">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043460">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053561">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043461">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053461">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043461">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043460">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043561">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053461">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#043461">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053561">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053560">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043561">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053561">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043461">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053460">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#053560">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043560">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053560">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#043460">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043560">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#053461">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053560">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043460">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053460">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053560">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053461">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043461">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#DEEAEB">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F0EAED">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F5F2EB">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F7F7F3">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#E7EFF7">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#EEF1F7">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F1F0F4">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#E9E8EE">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#DBE0DD">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#043461">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053461">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053460">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#043561">&nbsp;</td>
          </tr>
          <tr>
            <td width="360" height="8" colSpan="1" bgcolor="#FDFDFD">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FCFCFC">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#FBFBFB">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FAFAFB">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F9F9FA">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F8F8F9">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FAFAFA">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#A1BEC6">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#9CC1CB">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#9CC2CB">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053462">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053562">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053461">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053562">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053561">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043461">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#053561">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#053461">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043561">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053561">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043561">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053561">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053562">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053561">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043561">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#053461">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053562">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053462">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043561">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053561">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043461">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053561">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#053461">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043461">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053561">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#053461">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043461">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053461">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043462">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043561">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#E0E2E6">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#ECECEF">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F1F2F4">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F7F7F9">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F8F8F9">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FBFBFC">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FBFBFB">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F8F8F9">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F6F6F8">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F1F2F4">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#EBEBEF">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#E4E6EA">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#D7DEE5">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#87A9BD">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#88AABE">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#88AAB7">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053562">&nbsp;</td>
          </tr>
          <tr>
            <td width="360" height="8" colSpan="2" bgcolor="#FFFFFF">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FDFDFD">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FEFEFE">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FDFDFD">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FEFEFE">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FEFDFE">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#FDFCFD">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#F8FDFA">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F0F8FA">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F6FAFB">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053561">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053562">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053561">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#053562">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043561">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043562">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#043462">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053562">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043561">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053562">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053561">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053462">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#053562">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053561">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043562">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043462">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053561">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043562">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053561">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053562">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#053561">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043561">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053561">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043561">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053562">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043561">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043562">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#CCD2D9">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#D3DCDE">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#EAE7ED">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F2F3F4">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F8F8F9">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FAFAFA">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FCFCFC">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FEFEFE">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FDFDFD">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FAFAFA">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FBFBFC">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F7F7F8">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F4F5F6">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F0EDF2">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#ECEAEF">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#E4EAEE">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#E6EBEE">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#E4E5E8">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#EDEAF0">&nbsp;</td>
          </tr>
          <tr>
            <td width="360" height="8" colSpan="7" bgcolor="#FFFFFF">&nbsp;</td>
            <td width="360" height="8" colSpan="5" bgcolor="#FEFEFE">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FFFFFF">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FEFEFE">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FAFDFD">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FAFAFB">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#A2C5D2">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#A3C6D5">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#A2C3CE">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053562">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043562">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#043360">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#05335F">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F0F1EF">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F0F1F3">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F2F3F5">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F3F4F6">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F3F4F5">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F2F3F5">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#EEEFF3">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#A0BECD">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#95B7C5">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#77A1B1">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#053562">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#043562">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053562">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#053462">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#043562">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#80A4B9">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#CFD8DD">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#E0E2E6">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#ECECEF">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F2F3F5">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F7F7F8">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FBFBFC">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FDFDFD">&nbsp;</td>
            <td width="360" height="8" colSpan="3" bgcolor="#FFFFFF">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#FDFDFD">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FAFAFB">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F9F9FA">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F7F8F9">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F5F6F7">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F3F4F6">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F2F3F5">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F3F4F6">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F6F7F8">&nbsp;</td>
          </tr>
          <tr>
            <td width="360" height="8" colSpan="14" bgcolor="#FFFFFF">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FEFEFE">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FCFCFC">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F8FCFB">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F7FCF9">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FBF4F3">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F6F8F4">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F4F6F3">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F7F8F5">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#ECF5FA">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F2F7F5">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F4F5F5">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F4F9FA">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F8F8F9">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F7F7F8">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F8F8F9">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F9F9FA">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F8F8F9">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F7F6F9">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#ECF7F8">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#EEF4F2">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#EDF0F4">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#EBECE8">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#E6E7E6">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#DFE2E2">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#DCDEE0">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#D9DCDD">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#D7DEE3">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#DBE2E8">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#E8E8EA">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#EEEEF0">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F5F6F7">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F9F9FA">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FCFCFD">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FEFEFE">&nbsp;</td>
            <td width="360" height="8" colSpan="5" bgcolor="#FFFFFF">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#FEFEFE">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#FCFCFD">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#FAFAFB">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#F9F9FA">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FBFBFC">&nbsp;</td>
          </tr>
          <tr>
            <td width="360" height="8" colSpan="16" bgcolor="#FFFFFF">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#FEFEFE">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#FDFDFD">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FBFBFB">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FCFCFC">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#FAFAFB">&nbsp;</td>
            <td width="360" height="8" colSpan="4" bgcolor="#FBFBFC">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FCFCFC">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FAFAFA">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FCFCFC">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FBFBFC">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FAFAFB">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F8F8F9">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F7F7F9">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F5F5F7">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F2F3F4">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#EFF1F3">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#ECEDEF">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#ECECEF">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#EDEDF0">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F0F1F3">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F2F3F5">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F5F6F7">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F9F9FA">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FCFCFD">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FCFCFC">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FDFDFD">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FFFFFF">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#FEFEFE">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FFFFFF">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#FEFEFE">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#FDFDFD">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FBFBFB">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FCFCFC">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FDFDFD">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#FBFBFC">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FDFDFD">&nbsp;</td>
          </tr>
          <tr>
            <td width="360" height="8" colSpan="17" bgcolor="#FFFFFF">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FDFDFD">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FFFFFF">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FEFEFE">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FDFDFD">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#FEFEFE">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#FDFDFD">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FCFCFC">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#FDFDFD">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FEFEFE">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#FDFDFD">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FEFEFE">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FCFCFC">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#FBFBFB">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F9F9F9">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F9F9FA">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F9F9FB">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F7F7F9">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F6F7F8">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F4F5F7">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F6F7F8">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F5F6F7">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F8F8F9">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FBFBFC">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FCFCFD">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FCFCFC">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FDFDFD">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FFFFFF">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FEFEFE">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#FFFFFF">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#FEFEFE">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FFFFFF">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FEFEFE">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#FFFFFF">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FEFEFE">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FDFDFD">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FEFEFE">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FDFDFD">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FEFEFE">&nbsp;</td>
          </tr>
          <tr>
            <td width="360" height="8" colSpan="7" bgcolor="#FFFFFF">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FEFEFE">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FFFFFF">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FEFEFE">&nbsp;</td>
            <td width="360" height="8" colSpan="6" bgcolor="#FFFFFF">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FDFDFD">&nbsp;</td>
            <td width="360" height="8" colSpan="3" bgcolor="#FFFFFF">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FEFEFE">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FFFFFF">&nbsp;</td>
            <td width="360" height="8" colSpan="3" bgcolor="#FEFEFE">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FFFFFF">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FDFDFD">&nbsp;</td>
            <td width="360" height="8" colSpan="3" bgcolor="#FEFEFE">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FFFFFF">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FDFDFD">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#FFFFFF">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FEFEFE">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FDFDFD">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#FCFCFC">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FBFBFB">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#FAFAFB">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#F9F9FA">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FBFBFC">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FCFCFD">&nbsp;</td>
            <td width="360" height="8" colSpan="2" bgcolor="#FCFCFC">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FFFFFF">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FEFEFE">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FFFFFF">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FDFDFD">&nbsp;</td>
            <td width="360" height="8" colSpan="3" bgcolor="#FEFEFE">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FFFFFF">&nbsp;</td>
            <td width="360" height="8" colSpan="4" bgcolor="#FEFEFE">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FFFFFF">&nbsp;</td>
            <td width="360" height="8" colSpan="3" bgcolor="#FEFEFE">&nbsp;</td>
            <td width="360" height="8" colSpan="1" bgcolor="#FFFFFF">&nbsp;</td>
          </tr>
        </tbody>
      </StyledTable>
      </TableWrapper>
      <ObjectsWrapper>
        <Tree decorated={decorated} cellHeight={8} cellWidth={8} style={{ top: '-130px', left: '40%' }} />
        <Tree decorated={decorated} cellHeight={1} cellWidth={1} style={{ top: '-50px', left: '80%' }} />
        <Tree decorated={decorated} cellHeight={4} cellWidth={4} style={{ top: '-200px', left: '-5%' }} />
        <Deer cellHeight={3} cellWidth={3} style={{ top: '190px', left: '63%' }} />
        <Sign
          cellHeight={4}
          cellWidth={3}
          style={{ transform: 'rotate(-10deg)', left: '20%' }}
          onButtonClick={onDecorateTrees}
        >
          {decorated ? 'Undecorate' : 'Decorate'} trees
        </Sign>
        <Sign
          cellHeight={3}
          cellWidth={2}
          style={{ transform: 'scaleX(-1) rotate(-10deg)', top: '40px', left: '70%' }}
          buttonStyle={{ height: 80, transform: 'scaleX(-1) rotate(2deg)' }}
          onButtonClick={onStartSnow}
        >
          {snowStarted ? 'Stop' : 'Start'} snow
        </Sign>
      </ObjectsWrapper>
    </Wrapper>
  )
}

export default SnowBackground;
