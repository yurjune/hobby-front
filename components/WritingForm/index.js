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

import { Button } from '../Common/Button/style';
import axios from 'axios';
import useInput from '../../hooks/useInput';

const iconStyle = {
  cursor: "pointer",
  color: "white",
  position: "absolute",
  left: "42%",
  top: "42%",
};

const WritingForm = ({ me }) => {
  const [imageList, setImageList] = useState([]);
  const [text, onChangeText] = useInput('');
  const category = '수영'
  const fileRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    console.log('imageList', imageList);
    console.dir(fileRef.current.files)
  }, [imageList]);

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

  const onClickBlankImages = () => {
    fileRef.current.click();
  };
  return (
    <Box>
      {imageList.length >= 1 ? 
        <Grid>{imageList.map(item => (
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
      <Button align="end" onClick={onSubmit}>작성</Button>
    </Box>
  );
};

export default WritingForm;