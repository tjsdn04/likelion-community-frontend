import * as S from "./MainPage.styled";
import { MainHeader } from "@components/MainHeader";
import { Footer } from '@components/Footer'
import logo from '@assets/images/whiteLogo.svg'
import sliderImg from '@assets/images/slider.svg'
import { PopularPost } from '@components/mainPage/PopularPost';
import { PopularData } from "../../constant/mainPage/popularPostData";
import { TotalPost } from "@components/mainPage/TotalPost";
import { TotalPostData } from "../../constant/mainPage/totalPostData";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css';

export const MainPage = () => {

	return (
		<S.MainWrapper>
			<MainHeader title="EVERION" />
			<S.Content>
				<S.MainSwiper>
					<Swiper
					modules={[ Autoplay ]}
					loop={true}
					spaceBetween={30}
					autoplay={{
						delay: 3000,
						disalbeOnInteraction: false }}
					>
					<SwiperSlide>
						<S.Slider1>
						<S.Left>
							<S.Desc>멋쟁이 사자처럼</S.Desc>
							<S.Desc>출석부터 네트워킹까지 한번에!</S.Desc>
							<S.Name>EVERION</S.Name>
						</S.Left>
						<S.RightLogo src={logo} />
						</S.Slider1>
					</SwiperSlide>
					<SwiperSlide>
						<S.Slider2 src={sliderImg} />
					</SwiperSlide>
					</Swiper>
				</S.MainSwiper>
				<S.Board>
					<S.Title>실시간 인기글</S.Title>
					<S.Posts>
						{PopularData.map((post,index) => (
							<PopularPost
								key={index}
								time={post.time}
								anonymous={post.anonymous}
								writer={post.writer}
								body={post.body}
								image={post.image}
							/>
						))}
					</S.Posts>
				</S.Board>
				<S.Board>
					<S.Title>전체글
						<S.More>더보기</S.More>
					</S.Title>
					<S.Posts>
						{TotalPostData.map((post,index) => (
							<TotalPost
								key={index}
								board_title={post.board_title}
								body={post.body}
							/>
						))}
					</S.Posts>
				</S.Board>
			</S.Content>
			<Footer />
		</S.MainWrapper>
	);
};
