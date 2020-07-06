import React, { memo } from 'react'
import {
  StyleSheet,
  StyleProp,
  ImageStyle,
  ViewStyle,
  Image,
  TouchableOpacity
} from 'react-native'

const styles = StyleSheet.create({
  starStyle: {
    width: 27,
    height: 27
  }
})

interface StarT {
  star?: boolean;
  bool?: boolean;
  imageStyle?: StyleProp<ImageStyle>;
  onPress?: () => void;
  viewStyle?: StyleProp<ViewStyle>
}

const Star = memo(({ star = false, bool, onPress, imageStyle, viewStyle }: StarT) => {
  const { starStyle } = styles
  const source = star
    ? 'https://s3.eu-central-1.wasabisys.com/ghashtag/ImagesForApp/StarActive.png'
    : 'https://s3.eu-central-1.wasabisys.com/ghashtag/ImagesForApp/StarDisable.png'
  return (
    <TouchableOpacity onPress={onPress} style={viewStyle}>
      <Image style={[starStyle, imageStyle]} source={{ uri: source }} />
    </TouchableOpacity>
  )
})

export { Star }
