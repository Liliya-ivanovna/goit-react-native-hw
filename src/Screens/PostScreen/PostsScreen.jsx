import {
    BackgroundView,
    ProfileWrapper,
    ProfileImage,
    ProfileDetailsWrapper,
    ProfileName,
    ProfileEmail,
  } from "./PostsScreen.styled";
  import profileImage from "../../../assets/profile_img.png";

  const PostsScreen = () => {
    return (
      <BackgroundView>
     
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