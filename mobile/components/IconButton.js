import React from 'react';
import { Image } from 'react-native'
import Button from './Button';

import refreshSrc from '../static/refresh-button.png';
import pauseSrc from '../static/pause-button.png';

const createIconButtonFor = src => props =>
  <Button onPress={props.onPress}>
    <Image
      style={{ width: 40, height: 40 }}
      source={src}
    />
  </Button>;

export const RestartButton = createIconButtonFor(refreshSrc);
export const PauseButton = createIconButtonFor(pauseSrc);
