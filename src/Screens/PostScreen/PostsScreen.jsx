import {
    BackgroundView,
    ProfileWrapper,
    ProfileImage,
    ProfileDetailsWrapper,
    ProfileName,
    ProfileEmail,
  } from "./PostsScreen.styled";
  import profileImage from "../../../assets/profile_img.png";
  import { Feather } from '@expo/vector-icons';

  const PostsScreen = () => {
    return (
      <BackgroundView>
        <Feather name="log-out" size={24} color="#BDBDBD" />
        <ProfileWrapper>
        <ProfileImage source={profileImage}/>
          <ProfileDetailsWrapper>
            <ProfileName>Natali Romanova</ProfileName>
            <ProfileEmail>email@example.com</ProfileEmail>
          </ProfileDetailsWrapper>
        </ProfileWrapper>
      </BackgroundView>
    );
  };
  
  export default PostsScreen;