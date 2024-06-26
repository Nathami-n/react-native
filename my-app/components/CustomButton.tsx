import {TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { Router } from 'expo-router/build/types';

//implement interface

interface ICustomButtonProps {
    title: string;
    containerStyles: string;
    handlePress: () => void;
    textStyles?: string;
    isLoading?: boolean;
};

const CustomButton: React.FC<ICustomButtonProps> = ({
    title,
    containerStyles,
    handlePress,
    textStyles,
    isLoading
}) => {
  return (
  <TouchableOpacity
  onPress={handlePress}
  activeOpacity={0.7}

   className={`${containerStyles} bg-secondary rounded-xl min-h-[62px] justify-center items-center ${isLoading ? 'opacity-50': ''}`}>
    <Text className={`${textStyles}text-primary font-psemibold text-lg`}> {title}</Text>
  </TouchableOpacity>
  )
}

export default CustomButton