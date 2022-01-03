import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import {
  Grid,
  GridItem,
  Picture,
  ImageInput,
  TextArea,
} from './style';
import { FlexC } from '../Common';
import { Button } from '../Common/custom';
import axios from 'axios';
import useInput from '../../hooks/useInput';
import { localhost } from '../Common/global';

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
  const [now, setNow] = useState(0);
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

  useEffect(() => {
    if (!exPost) {
      setNow(JSON.parse(localStorage.getItem('time')));
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
      if (!text) return alert("본문을 입력해 주세요!");
      // if (!imageList.length) return alert("이미지를 첨부해 주세요!");
      const result = await axios.post('/post', {
        id: me.id,
        content: text,
        image: imageList,
        time: now,
      });
      console.log(result);
      alert('작성이 완료되었습니다');
      localStorage.removeItem('time');
      router.push(`/`);
    } catch (error) {
      console.error(error);
    }
  };

  const onEdit = async () => {
    try {
      if (!text) return alert("본문을 입력해 주세요!");
      if (!imageList.length) return alert("이미지를 첨부해 주세요!");
      const result = await axios.patch(`/post/editpost`, {
        userId: me.id,
        postId: exPost.id,
        content: text,
        image: imageList,
      });
      console.log(result);
      alert('수정이 완료되었습니다');
      router.push(`/`);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickBlankImages = () => {
    fileRef.current.click();
  };

  return (
    <FlexC p="10px">
      {imageList.length >= 1 ? 
        <Grid>
          {imageList.map(item => (
            <GridItem key={item}>
              <Picture url={localhost(item)} />
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