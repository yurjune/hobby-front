import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import {
  Box,
  Grid,
  GridItem,
  Picture,
  ImageInput,
  TextArea,
} from './style';

import { FlexC, Button } from '../Common';
import axios from 'axios';
import useInput from '../../hooks/useInput';

const iconStyle = {
  cursor: "pointer",
  color: "white",
  position: "absolute",
  left: "42%",
  top: "42%",
};

const WritingForm = ({ me, exPost }) => {
  const [imageList, setImageList] = useState([]);
  const [text, onChangeText, setText] = useInput('');
  const category = '수영';
  const fileRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (exPost) {
      console.log(exPost);
      setText(exPost.content);
      if (exPost.Images.length >= 1) {
        const array = exPost.Images.map(item => item.src);
        setImageList(array);
      }
    }
  }, [exPost]);

  const onChangeImages = async (e) => {
    try {
      e.preventDefault();
      console.log('e.target.files:', e.target.files);
      const imageFormData = new FormData();
      [].forEach.call(e.target.files, (f) => {
        imageFormData.append('image', f);
      });
      const result = await axios.post('/post/images', imageFormData);
      console.log('result.data:', result.data);
      setImageList(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async () => {
    try {
      if (!text) {
        return alert("본문을 입력해 주세요!");
      }
      const result = await axios.post('/post', {
        id: me.id,
        category,
        content: text,
        image: imageList,
      });
      console.log(result);
      alert('작성이 완료되었습니다');
      router.push(`/community`);
    } catch (error) {
      console.error(error);
    }
  };

  const onEdit = async () => {
    try {
      if (!text) {
        return alert("본문을 입력해 주세요!");
      }
      const result = await axios.patch(`/post/editpost`, {
        userId: me.id,
        postId: exPost.id,
        category,
        content: text,
        image: imageList,
      });
      console.log(result);
      alert('수정이 완료되었습니다');
      router.push(`/community`);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickBlankImages = () => {
    fileRef.current.click();
  };

  return (
    <FlexC p="15px" flex="2.3">
      {imageList.length >= 1 ? 
        <Grid>
          {imageList.map(item => (
            <GridItem key={item}>
              <Picture url={`http://localhost:3060/${item}`} />
            </GridItem>
          ))}
        </Grid>
        : <Grid>
          <GridItem>
            <Picture color="lightgray" onClick={onClickBlankImages}>
              <FontAwesomeIcon icon={faPlus} size="2x" style={iconStyle} />
            </Picture>
          </GridItem>
        </Grid>
      }
      <ImageInput 
        type="file"
        ref={fileRef}
        multiple
        onChange={onChangeImages}
      />
      <TextArea 
        value={text}
        onChange={onChangeText} 
      />
      { exPost
        ? <Button self="end" onClick={onEdit}>수정</Button>
        : <Button self="end" onClick={onSubmit}>작성</Button>
      }
    </FlexC>
  );
};

export default WritingForm;