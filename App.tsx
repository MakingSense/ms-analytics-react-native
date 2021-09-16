import React, {useState, useRef, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import {Options} from './src/components/options/options';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [childrenIds, setChildrenIds] = useState<Array<any>>();
  const refView = useRef<any>(null);

  useEffect(() => {
    if (refView) {
      // console.log('data', component._children[0]._children);
      setChildrenIds(
        refView.current?._children[0]._children.map(
          (el: {_nativeTag: any}) => el._nativeTag,
        ),
      );
    }
  }, [refView, setChildrenIds]);

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View
          onStartShouldSetResponder={evt => {
            evt.persist();
            if (childrenIds && childrenIds.length) {
              if (childrenIds.includes(evt.target)) {
                return true;
              }
              console.log('Tapped outside', evt.target);
            } else {
              console.log('event', evt.target);
              console.log('nothing of nothing');
            }
            return true;
          }}>
          <View ref={refView}>
            <Options tagKey={'optionsXD'} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
