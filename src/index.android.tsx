import { DeviceEventEmitter } from 'react-native';
import { useEffect, useRef } from 'react';

function useTVRemoteHandler(callback: any) {
  const listener: any = useRef();
  useEffect(() => {
    listener.current = DeviceEventEmitter.addListener(
      'onKeyDown',
      ({ action, focusedViewId, eventType }) => {
        return callback({
          tag: focusedViewId,
          eventType: eventType,
          eventKeyAction: action,
        });
      }
    );

    return () => {
      if (listener.current) listener.current.remove();
    };
  });

  return {};
}

export { useTVRemoteHandler };
