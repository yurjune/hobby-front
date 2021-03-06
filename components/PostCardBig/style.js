import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 650px;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 10px;
`
const Picture = styled.div`
  border-radius: 15px;
  height: 0px;
  padding-bottom: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${props => props.url});
  margin-bottom: ${props => props.mb};
`
const Paragraph = styled.div`
  word-break: break-all;
  margin-bottom: ${props => props.mb || "20px"};
  line-height: 1.5rem;
  a {
    font-weight: bold;
    margin-right: 15px;
    cursor: pointer;
  }
`
const Comment = styled.textarea`
  flex: 1;
  height: 25px;
  padding: 5px 10px;
  margin-right: 10px;
  align-self: center;
  border-radius: 15px;
  border: 1px solid lightgray;
  resize: none;
  overflow: visible;
`
const ShowComment = styled.div`
  margin-bottom: 20px;
  color: #808080;
  cursor: pointer;
`
const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  jusitfy-contents: center;
`
const Menu = styled.ul`
  position: absolute;
  left: ${props => props.left};
  right: ${props => props.right};
  top: ${props => props.top};
  border: 1px solid gold;
  border-radius: 5px;
  li {
    background-color: gold;
    cursor: pointer;
    padding: 10px 15px;
  }
  li:hover {
    background-color: crimson;
    transition: 0.3s;
  }
`
const iconStyle = {
  "marginRight": "10px", 
  "cursor": "pointer",
};

export {
  Wrapper,
  Picture,
  Paragraph,
  Comment,
  ShowComment,
  MenuWrapper,
  Menu,
  iconStyle,
}