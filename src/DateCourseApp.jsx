import React, { useState, useEffect } from 'react';
import { Heart, MapPin, Clock, Share2, ChevronLeft, Mail, Check, Navigation } from 'lucide-react';

const DateCourseApp = () => {
  const [step, setStep] = useState('welcome');
  const [selectedMoods, setSelectedMoods] = useState([]);
  const [currentMoodIndex, setCurrentMoodIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [savedCourses, setSavedCourses] = useState([]);

  useEffect(() => {
    // 위치 권한 요청
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.log('위치 정보를 가져올 수 없습니다.');
        }
      );
    }
  }, []);

  const moods = [
    { id: 'quiet', name: '조용한', emoji: '🤫', color: 'bg-blue-100', keywords: ['한적한', '프라이빗', '차분한'] },
    { id: 'lively', name: '활기찬', emoji: '🎉', color: 'bg-orange-100', keywords: ['왁자지껄', '신나는', '에너제틱'] },
    { id: 'romantic', name: '로맨틱한', emoji: '💕', color: 'bg-pink-100', keywords: ['분위기있는', '아늑한', '로맨틱'] },
    { id: 'casual', name: '편안한', emoji: '😌', color: 'bg-green-100', keywords: ['캐주얼', '자연스러운', '편한'] },
    { id: 'trendy', name: '트렌디한', emoji: '✨', color: 'bg-purple-100', keywords: ['힙한', '감각적인', '세련된'] },
    { id: 'nature', name: '자연친화적', emoji: '🌿', color: 'bg-emerald-100', keywords: ['야외', '자연', '힐링'] },
    { id: 'cultural', name: '문화적인', emoji: '🎨', color: 'bg-indigo-100', keywords: ['전시', '공연', '예술'] },
    { id: 'foodie', name: '맛집 탐방', emoji: '🍽️', color: 'bg-red-100', keywords: ['미식', '맛집', '요리'] }
  ];

  const courses = {
    quiet: {
      name: '조용한 데이트',
      area: '종로/삼청동',
      places: [
        { 
          time: '15:00-17:00', 
          name: '국립현대미술관 서울', 
          type: '문화공간', 
          desc: '저평가 가격의 특별전문점으로 여러가지 작품과 공간들을 경험할 수 있습니다. 넓은 갤러리에서 조용히 대화를 나누며 예술 작품을 감상하세요.',
          image: '🏛️',
          address: '서울 종로구 삼청로 30',
          lat: 37.5789,
          lng: 126.9810,
          kakaoMapUrl: 'https://map.kakao.com/link/map/국립현대미술관서울관,37.5789,126.9810'
        },
        { 
          time: '17:30-19:00', 
          name: '북촌 한옥마을 카페', 
          type: '카페', 
          desc: '전통 한옥을 개조한 아늑한 카페에서 창밖의 풍경을 감상하며 여유로운 시간을 보내세요.',
          image: '☕',
          address: '서울 종로구 북촌로5길 26',
          lat: 37.5825,
          lng: 126.9849,
          kakaoMapUrl: 'https://map.kakao.com/link/map/북촌한옥마을,37.5825,126.9849'
        },
        { 
          time: '19:30-21:30', 
          name: '익선동 와인바', 
          type: '바', 
          desc: '오래된 한옥 골목의 감성적인 와인바. 조명이 아늑하고 음악도 잔잔해서 깊은 대화를 나누기 좋습니다.',
          image: '🍷',
          address: '서울 종로구 돈화문로11길',
          lat: 37.5720,
          lng: 126.9910,
          kakaoMapUrl: 'https://map.kakao.com/link/map/익선동,37.5720,126.9910'
        }
      ]
    },
    lively: {
      name: '활기찬 데이트',
      area: '홍대/연남동',
      places: [
        { 
          time: '14:00-16:00', 
          name: '홍대 거리', 
          type: '거리/쇼핑', 
          desc: '트렌디한 쇼핑과 거리 공연을 즐길 수 있는 활기찬 장소. 다양한 브랜드숍과 독립서점, 예술가들의 공연이 있어요.',
          image: '🛍️',
          address: '서울 마포구 홍익로',
          lat: 37.5563,
          lng: 126.9230,
          kakaoMapUrl: 'https://map.kakao.com/link/map/홍대거리,37.5563,126.9230'
        },
        { 
          time: '16:30-18:30', 
          name: '망원한강공원', 
          type: '야외활동', 
          desc: '자전거를 타거나 피크닉을 즐기기 좋은 한강 공원. 선셋 타임에 가면 더욱 로맨틱해요.',
          image: '🚴',
          address: '서울 마포구 망원동',
          lat: 37.5505,
          lng: 126.8950,
          kakaoMapUrl: 'https://map.kakao.com/link/map/망원한강공원,37.5505,126.8950'
        },
        { 
          time: '19:00-21:00', 
          name: '연남동 맛집거리', 
          type: '식사', 
          desc: '다양한 음식점과 독특한 분위기의 식당들. 일본식 이자카야부터 파스타 맛집까지 선택의 폭이 넓어요.',
          image: '🍜',
          address: '서울 마포구 연남동',
          lat: 37.5670,
          lng: 126.9250,
          kakaoMapUrl: 'https://map.kakao.com/link/map/연남동,37.5670,126.9250'
        }
      ]
    },
    romantic: {
      name: '로맨틱 데이트',
      area: '남산/이태원',
      places: [
        { 
          time: '17:00-19:00', 
          name: 'N서울타워', 
          type: '전망대', 
          desc: '서울의 야경을 한눈에 볼 수 있는 로맨틱한 장소. 사랑의 자물쇠와 함께 추억을 남겨보세요.',
          image: '🗼',
          address: '서울 용산구 남산공원길 105',
          lat: 37.5512,
          lng: 126.9882,
          kakaoMapUrl: 'https://map.kakao.com/link/map/N서울타워,37.5512,126.9882'
        },
        { 
          time: '19:30-21:30', 
          name: '이태원 루프탑 레스토랑', 
          type: '식사', 
          desc: '야경과 함께하는 프라이빗한 식사. 이국적인 분위기와 맛있는 음식이 조화를 이룹니다.',
          image: '🌃',
          address: '서울 용산구 이태원로',
          lat: 37.5345,
          lng: 126.9945,
          kakaoMapUrl: 'https://map.kakao.com/link/map/이태원,37.5345,126.9945'
        },
        { 
          time: '22:00-23:30', 
          name: '한강 야경 산책', 
          type: '산책', 
          desc: '조명이 아름다운 한강변 산책로. 달빛 아래 손잡고 걸으며 하루를 마무리하세요.',
          image: '🌉',
          address: '서울 용산구 이촌동',
          lat: 37.5220,
          lng: 126.9680,
          kakaoMapUrl: 'https://map.kakao.com/link/map/한강공원,37.5220,126.9680'
        }
      ]
    },
    trendy: {
      name: '힙한 데이트',
      area: '성수동/한남동',
      places: [
        { 
          time: '14:00-16:00', 
          name: '성수동 카페거리', 
          type: '카페투어', 
          desc: '공장을 개조한 감각적인 카페들이 모여있어요. 인더스트리얼 감성의 인테리어가 인상적입니다.',
          image: '☕',
          address: '서울 성동구 연무장길',
          lat: 37.5445,
          lng: 127.0560,
          kakaoMapUrl: 'https://map.kakao.com/link/map/성수동,37.5445,127.0560'
        },
        { 
          time: '16:30-18:30', 
          name: '대림창고', 
          type: '복합문화공간', 
          desc: '공장을 개조한 대형 복합문화공간. 전시, 공연, 쇼핑을 한 곳에서 즐길 수 있어요.',
          image: '🏭',
          address: '서울 성동구 성수이로 7길 17',
          lat: 37.5440,
          lng: 127.0555,
          kakaoMapUrl: 'https://map.kakao.com/link/map/대림창고,37.5440,127.0555'
        },
        { 
          time: '19:00-21:00', 
          name: '한남동 파인다이닝', 
          type: '식사', 
          desc: '미슐랭 가이드에 오른 레스토랑들이 즐비한 한남동. 특별한 날을 더욱 특별하게 만들어줍니다.',
          image: '🍽️',
          address: '서울 용산구 한남동',
          lat: 37.5340,
          lng: 127.0025,
          kakaoMapUrl: 'https://map.kakao.com/link/map/한남동,37.5340,127.0025'
        }
      ]
    },
    nature: {
      name: '자연 힐링 데이트',
      area: '북한산/남산',
      places: [
        { 
          time: '10:00-13:00', 
          name: '북한산 둘레길', 
          type: '등산/산책', 
          desc: '가볍게 걸을 수 있는 둘레길 코스. 맑은 공기와 숲속 풍경이 힐링을 선사합니다.',
          image: '⛰️',
          address: '서울 종로구 구기동',
          lat: 37.6200,
          lng: 126.9670,
          kakaoMapUrl: 'https://map.kakao.com/link/map/북한산둘레길,37.6200,126.9670'
        },
        { 
          time: '13:30-15:30', 
          name: '숲속 카페', 
          type: '브런치카페', 
          desc: '북한산 입구의 자연친화적 카페. 통창으로 보이는 숲 풍경과 함께하는 브런치.',
          image: '🌲',
          address: '서울 종로구 평창동',
          lat: 37.6100,
          lng: 126.9700,
          kakaoMapUrl: 'https://map.kakao.com/link/map/평창동,37.6100,126.9700'
        },
        { 
          time: '16:00-18:00', 
          name: '서울식물원', 
          type: '식물원', 
          desc: '다양한 식물과 온실 정원을 감상할 수 있는 곳. 이국적인 분위기에서 사진도 예쁘게 나와요.',
          image: '🌺',
          address: '서울 강서구 마곡동로 161',
          lat: 37.5700,
          lng: 126.8350,
          kakaoMapUrl: 'https://map.kakao.com/link/map/서울식물원,37.5700,126.8350'
        }
      ]
    },
    cultural: {
      name: '문화 예술 데이트',
      area: '삼청동/대학로',
      places: [
        { 
          time: '14:00-16:00', 
          name: '리움미술관', 
          type: '미술관', 
          desc: '현대미술과 전통미술을 모두 감상할 수 있는 사립 미술관. 건축물 자체도 예술작품입니다.',
          image: '🎨',
          address: '서울 용산구 이태원로55길 60-16',
          lat: 37.5355,
          lng: 127.0030,
          kakaoMapUrl: 'https://map.kakao.com/link/map/리움미술관,37.5355,127.0030'
        },
        { 
          time: '16:30-18:00', 
          name: '삼청동 갤러리 투어', 
          type: '갤러리', 
          desc: '작은 갤러리들이 모여있는 삼청동 거리. 무료 전시들을 둘러보며 예술적 감성을 키워보세요.',
          image: '🖼️',
          address: '서울 종로구 삼청로',
          lat: 37.5840,
          lng: 126.9820,
          kakaoMapUrl: 'https://map.kakao.com/link/map/삼청동,37.5840,126.9820'
        },
        { 
          time: '19:00-21:30', 
          name: '대학로 소극장 공연', 
          type: '공연', 
          desc: '연극, 뮤지컬 등 다양한 소극장 공연. 배우들의 열정을 가까이서 느낄 수 있어요.',
          image: '🎭',
          address: '서울 종로구 대학로',
          lat: 37.5820,
          lng: 127.0020,
          kakaoMapUrl: 'https://map.kakao.com/link/map/대학로,37.5820,127.0020'
        }
      ]
    },
    foodie: {
      name: '맛집 탐방 데이트',
      area: '망리단길/신사동',
      places: [
        { 
          time: '12:00-14:00', 
          name: '망리단길 브런치', 
          type: '브런치', 
          desc: '독특한 컨셉의 브런치 맛집들이 모여있어요. SNS에서 인기있는 플레이팅과 맛 모두 만족스럽습니다.',
          image: '🥐',
          address: '서울 마포구 망원동',
          lat: 37.5565,
          lng: 126.9000,
          kakaoMapUrl: 'https://map.kakao.com/link/map/망원동,37.5565,126.9000'
        },
        { 
          time: '15:00-17:00', 
          name: '디저트 카페 투어', 
          type: '디저트', 
          desc: '케이크, 타르트, 마카롱 등 수제 디저트 전문점들. 달콤한 오후를 보내기 좋아요.',
          image: '🍰',
          address: '서울 마포구 성미산로',
          lat: 37.5630,
          lng: 126.9120,
          kakaoMapUrl: 'https://map.kakao.com/link/map/연남동,37.5630,126.9120'
        },
        { 
          time: '18:00-20:00', 
          name: '신사동 가로수길 파인다이닝', 
          type: '저녁식사', 
          desc: '미슐랭 셰프의 레스토랑부터 퓨전 한식까지. 특별한 맛의 경험을 선사합니다.',
          image: '🍷',
          address: '서울 강남구 신사동',
          lat: 37.5205,
          lng: 127.0230,
          kakaoMapUrl: 'https://map.kakao.com/link/map/가로수길,37.5205,127.0230'
        }
      ]
    }
  };

  const handleMoodSwipe = (direction) => {
    const currentMood = moods[currentMoodIndex];
    
    if (direction === 'right') {
      setSelectedMoods([...selectedMoods, currentMood.id]);
    }
    
    if (currentMoodIndex < moods.length - 1) {
      setCurrentMoodIndex(currentMoodIndex + 1);
    } else {
      setStep('result');
    }
  };

  const getRecommendedCourse = () => {
    // 선택된 무드에 따라 코스 추천
    if (selectedMoods.includes('quiet') || selectedMoods.includes('cultural')) return courses.quiet;
    if (selectedMoods.includes('lively')) return courses.lively;
    if (selectedMoods.includes('romantic')) return courses.romantic;
    if (selectedMoods.includes('trendy')) return courses.trendy;
    if (selectedMoods.includes('nature')) return courses.nature;
    if (selectedMoods.includes('foodie')) return courses.foodie;
    
    // 기본값
    return courses.romantic;
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      // 실제 서비스에서는 여기서 API 호출
      console.log('Email submitted:', email);
      setEmailSubmitted(true);
      
      // 3초 후 메시지 숨기기
      setTimeout(() => {
        setEmailSubmitted(false);
      }, 3000);
    }
  };

  const openKakaoMap = (url) => {
    window.open(url, '_blank');
  };

  const saveCourse = (course) => {
    if (!savedCourses.find(c => c.name === course.name)) {
      setSavedCourses([...savedCourses, course]);
    }
  };

  const shareToKakao = () => {
    alert('카카오톡 공유 기능은 카카오 개발자 등록 후 사용 가능합니다!');
  };

  if (step === 'welcome') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
        <div className="text-center space-y-8 max-w-md">
          <div className="text-6xl mb-4">💕</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            검색 없이 바로 떠나는<br />데이트 코스
          </h1>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-left space-y-3">
            <p className="text-gray-700 font-medium">😫 매번 약속 장소 어디 갈지<br />30분 넘게 고민하시나요?</p>
            <p className="text-gray-600">인스타/블로그/지도 앱의 쏟아지는 정보들...</p>
            <p className="text-gray-700 font-medium">✨ 우리에게 딱 맞는 장소를<br />추천받고 싶다면?</p>
          </div>
          
          <button
            onClick={() => setStep('mood')}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-5 rounded-full text-lg font-bold hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg"
          >
            확인하러 가기 →
          </button>

          {/* 이메일 수집 */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mt-8">
            <div className="flex items-center gap-2 mb-3">
              <Mail size={20} className="text-blue-500" />
              <p className="text-sm font-semibold text-gray-700">서비스 오픈 알림 받기</p>
            </div>
            <form onSubmit={handleEmailSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일 주소를 입력하세요"
                className="w-full px-4 py-3 rounded-full border-2 border-gray-200 focus:border-blue-400 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
              >
                알림 신청하기
              </button>
            </form>
            {emailSubmitted && (
              <div className="mt-3 flex items-center gap-2 text-green-600 text-sm font-medium">
                <Check size={18} />
                <span>신청 완료! 오픈 시 알려드릴게요 💌</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (step === 'mood') {
    const currentMood = moods[currentMoodIndex];
    const progress = ((currentMoodIndex + 1) / moods.length) * 100;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">당신의 취향에 최적화된</h2>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">하루 설계</h1>
            
            {/* Progress Bar */}
            <div className="mt-6 space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>진행률</span>
                <span>{currentMoodIndex + 1} / {moods.length}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center space-y-6">
            <div className={`${currentMood.color} rounded-2xl p-12 transition-all duration-300 hover:scale-105`}>
              <div className="text-8xl mb-4">{currentMood.emoji}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{currentMood.name}</h3>
              <div className="flex gap-2 justify-center flex-wrap">
                {currentMood.keywords.map((keyword, idx) => (
                  <span key={idx} className="bg-white/70 px-3 py-1 rounded-full text-sm text-gray-700">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => handleMoodSwipe('left')}
                className="flex-1 bg-gray-200 text-gray-700 px-6 py-4 rounded-full font-semibold hover:bg-gray-300 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <ChevronLeft size={20} />
                패스
              </button>
              <button
                onClick={() => handleMoodSwipe('right')}
                className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
              >
                좋아요
                <Heart size={20} fill="currentColor" />
              </button>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500">
            💡 마음에 들면 <span className="font-semibold text-pink-600">좋아요</span>,<br />
            마음에 들지 않으면 <span className="font-semibold text-gray-600">패스</span>를 눌러주세요!
          </p>
        </div>
      </div>
    );
  }

  if (step === 'result') {
    const recommendedCourse = getRecommendedCourse();

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 pb-20">
        <div className="max-w-2xl mx-auto py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">✨ 추천 장소예요!</h1>
            <p className="text-gray-600">1분만에 완성하는 나에게 딱 맞는 데이트 코스</p>
            <div className="mt-4 inline-block bg-white px-6 py-2 rounded-full shadow-md">
              <span className="text-sm text-gray-600">📍 {recommendedCourse.area}</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800">{recommendedCourse.name}</h2>
              <button 
                onClick={() => saveCourse(recommendedCourse)}
                className="text-pink-500 hover:text-pink-600 transition-colors transform hover:scale-110"
              >
                <Heart size={28} fill={savedCourses.find(c => c.name === recommendedCourse.name) ? "currentColor" : "none"} />
              </button>
            </div>

            <div className="space-y-6">
              {recommendedCourse.places.map((place, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-5 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-blue-200">
                  <div className="flex gap-4">
                    <div className="text-5xl">{place.image}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                        <Clock size={16} />
                        <span className="font-medium">{place.time}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{place.name}</h3>
                      <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-2">
                        {place.type}
                      </span>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">{place.desc}</p>
                      <p className="text-xs text-gray-400 mb-3">📍 {place.address}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <button 
                      onClick={() => openKakaoMap(place.kakaoMapUrl)}
                      className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-4 py-3 rounded-xl text-sm font-bold hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-md"
                    >
                      <MapPin size={16} />
                      카카오맵 열기
                    </button>
                    {userLocation && (
                      <button 
                        onClick={() => {
                          const url = `https://map.kakao.com/link/to/${place.name},${place.lat},${place.lng}/from/현재위치,${userLocation.lat},${userLocation.lng}`;
                          window.open(url, '_blank');
                        }}
                        className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-xl text-sm font-bold hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-md"
                      >
                        <Navigation size={16} />
                        길찾기
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              onClick={() => {
                setStep('mood');
                setCurrentMoodIndex(0);
                setSelectedMoods([]);
              }}
              className="bg-white text-gray-700 px-6 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 border-2 border-gray-200 shadow-md"
            >
              🔄 다시 추천받기
            </button>
            <button 
              onClick={shareToKakao}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-4 rounded-2xl font-bold hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
            >
              <Share2 size={20} />
              공유하기
            </button>
          </div>

          {/* 저장된 코스 */}
          {savedCourses.length > 0 && (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mt-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Heart size={20} className="text-pink-500" fill="currentColor" />
                저장한 코스 ({savedCourses.length})
              </h3>
              <div className="space-y-2">
                {savedCourses.map((course, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-xl border border-gray-200">
                    <p className="font-semibold text-gray-800">{course.name}</p>
                    <p className="text-sm text-gray-500">{course.area}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 이메일 수집 (결과 페이지) */}
          {!emailSubmitted && (
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-6 mt-8 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Mail size={24} />
                <p className="font-bold text-lg">맘에 드셨나요?</p>
              </div>
              <p className="text-sm mb-4 text-blue-50">서비스 정식 오픈 시 가장 먼저 알림을 받아보세요!</p>
              <form onSubmit={handleEmailSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="이메일 주소를 입력하세요"
                  className="w-full px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg"
                >
                  오픈 알림 신청하기 🔔
                </button>
              </form>
            </div>
          )}

          {emailSubmitted && (
            <div className="bg-green-500 rounded-2xl p-6 mt-8 text-white text-center animate-pulse">
              <Check size={40} className="mx-auto mb-3" />
              <p className="font-bold text-lg">신청 완료!</p>
              <p className="text-sm text-green-100">서비스 오픈 시 가장 먼저 알려드릴게요 💌</p>
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default DateCourseApp;
