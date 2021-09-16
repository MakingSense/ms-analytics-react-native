import React, {useEffect, useRef} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const data = Array(5).fill(1);

export interface Props {
  tagKey: string;
}

const Options = (props: Props) => {
  const refView = useRef<any>(null);

  useEffect(() => {
    if (refView) {
      refView.current.tagKey = props.tagKey;
      console.log('current', refView.current.tagKey);
    }
  }, [props.tagKey, refView]);

  return (
    <View style={styles.container} ref={refView}>
      {data.map((d, index) => (
        <View style={styles.item} key={index}>
          <Text>Option {d + index}</Text>
        </View>
      ))}
    </View>
  );
};

export {Options};
