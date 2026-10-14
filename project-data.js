// Project content: edit each project here.
const projects = {
  "commerce": {
    "description": "멘토와 멘티가 장소에 구애받지 않고 교육봉사 수업을 진행할 수 있도록 개발한 온라인 학습 플랫폼입니다. WebRTC 기반 화상 수업과 WebSocket 기반 채팅·공동 판서 기능을 제공하며, 수업 도중 참여자가 입장하더라도 기존 판서와 학습 자료 상태를 이어받을 수 있도록 구현했습니다.",
    "stack": [
      "Java",
      "Spring Boot",
      "WebSocket",
      "STOMP",
      "WebRTC",
      "React",
      "MySQL",
      "Redis",
      "AWS EC2",
      "Docker",
      "GitLab CI/CD",
      "Caddy",
      "AWS S3",
      "GMS",
      "Whisper STT"
    ],
    "subtitle": "실시간 교육봉사 플랫폼",
    "period": "2026.02 ~ 2026.03",
    "members": "6명",
    "architecture": "assets/planit-architecture.png",
    "category": "공통 프로젝트",
    "erd": "assets/planit-erd.png",
    "title": "Planit",
    "roleTitle": "실시간 통신 백엔드 개발 및 데이터 동기화 최적화",
    "metrics": [
      [
        "초기 동기화 시간",
        "3초 이상 → 1초 미만"
      ],
      [
        "초기 상태 전송 데이터",
        "약 11MB → 0.55MB"
      ]
    ],
    "roles": [
      "WebSocket 기반 실시간 통신 구현 · STOMP를 활용하여 채팅·공동 판서 이벤트를 처리하고, 수업 참여자 간 실시간 데이터 동기화 기능 구현",
      "WebRTC 시그널링 및 세션 관리 · Offer/Answer/ICE Candidate 교환을 중계하고, 사용자 입·퇴장에 따른 화상 수업 연결 상태 관리",
      "신규 참여자 상태 복원 기능 개발 · 수업 중간에 입장한 사용자에게 기존 판서 이력과 PDF 상태를 전달하는 초기 동기화 로직 구현",
      "판서 이벤트 처리 구조 최적화 · 무제한으로 누적되던 판서 이력을 최대 5,000건의 원형 버퍼로 관리하고, 신규 참여자 대상 개별 전송 방식 적용",
      "AI 음성 처리 및 외부 서비스 연동 · Redis·S3를 활용한 음성 청크 처리 및 STT 비동기 연동"
    ],
    "cases": [
      {
        "title": "신규 참여자 판서 동기화 지연 개선",
        "problem": "수업 중 새로운 참여자가 입장할 때 기존 판서 이력을 복원하는 과정에서 3초 이상 지연이 발생했습니다.",
        "cause": "판서 이벤트가 제한 없이 누적되고 있었으며, 초기 상태 데이터를 신규 참여자뿐 아니라 기존 참여자에게도 전송하는 구조였습니다.",
        "solution": "판서 이력을 최대 5,000건으로 관리하는 원형 버퍼를 도입했습니다. 또한 STOMP 사용자별 큐를 활용해 신규 참여자에게만 초기 상태를 전송하도록 변경했습니다.",
        "result": "초기 동기화 시간을 3초 이상에서 1초 미만으로 단축하고, 전송 데이터를 약 11MB에서 0.55MB로 줄였습니다.",
        "comparison": {
          "before": [
            "판서 이벤트 무제한 누적",
            "전체 이력 전송",
            "기존 참여자에게도 전송"
          ],
          "after": [
            "원형 버퍼 최대 5,000건",
            "필요한 상태 데이터 추출",
            "신규 참여자에게만 전송"
          ],
          "beforeResult": "3초 이상 / 약 11MB",
          "afterResult": "1초 미만 / 약 0.55MB"
        }
      }
    ],
    "focus": "실시간 통신 백엔드 개발 및 성능 최적화",
    "stackGroups": {
      "Backend": [
        "Java",
        "Spring Boot",
        "WebSocket",
        "STOMP",
        "WebRTC"
      ],
      "Frontend": [
        "React"
      ],
      "Database": [
        "MySQL",
        "Redis"
      ],
      "Infrastructure": [
        "AWS EC2",
        "Docker",
        "GitLab CI/CD",
        "Caddy"
      ],
      "External": [
        "AWS S3",
        "GMS",
        "Whisper STT"
      ]
    },
    "roleDetails": [
      [
        "WebSocket 기반 실시간 통신 구현",
        "STOMP를 활용하여 채팅·공동 판서 이벤트를 처리하고, 수업 참여자 간 실시간 데이터 동기화 기능 구현"
      ],
      [
        "WebRTC 시그널링 및 세션 관리",
        "Offer/Answer/ICE Candidate 교환을 중계하고, 사용자 입·퇴장에 따른 화상 수업 연결 상태 관리"
      ],
      [
        "신규 참여자 상태 복원 기능 개발",
        "수업 중간에 입장한 사용자에게 기존 판서 이력과 PDF 상태를 전달하는 초기 동기화 로직 구현"
      ],
      [
        "판서 이벤트 처리 구조 최적화",
        "무제한으로 누적되던 판서 이력을 최대 5,000건의 원형 버퍼로 관리하고, 신규 참여자 대상 개별 전송 방식 적용"
      ],
      [
        "AI 음성 처리 및 외부 서비스 연동",
        "Redis·S3를 활용한 음성 청크 처리 및 STT 비동기 연동"
      ]
    ],
    "metricDetails": [
      [
        "초기 동기화 시간",
        "1초 미만",
        "기존 3초 이상",
        "원형 버퍼 및 개별 상태 전송"
      ],
      [
        "초기 전송 데이터",
        "0.55MB",
        "기존 약 11MB",
        "불필요한 이력 및 전송 대상 축소"
      ]
    ]
  },
  "cache": {
    "description": "6~10세 아동의 인지 능력 향상을 돕기 위해 개발한 게임 기반 훈련 서비스입니다. 아동은 태블릿에서 인지 훈련 게임을 수행하고, 상담사는 훈련 기록과 학습 결과를 조회해 아동별 진행 상황을 확인할 수 있습니다.\n\n실제 상담센터의 피드백을 반영해 게임 난이도와 조작 방식을 개선했으며, 앱 심사 지연에 대응해 웹앱으로 전환하여 예정된 사용자 테스트를 진행했습니다.",
    "stack": [
      "Java",
      "Spring Boot",
      "REST API",
      "PostgreSQL",
      "Redis",
      "React",
      "AWS EC2",
      "Nginx",
      "Python",
      "FastAPI"
    ],
    "subtitle": "아동 인지 훈련 서비스",
    "period": "2026.04 ~ 2026.05",
    "members": "6명 (개발 전공자 1명, 비전공자 5명)",
    "architecture": "assets/iroun-architecture.png",
    "category": "자율 프로젝트",
    "erd": "assets/iroun-erd.png",
    "title": "이로운",
    "roleTitle": "백엔드 시스템 설계 · 데이터 처리 최적화 · 서비스 배포",
    "metrics": [
      [
        "평균 응답 시간",
        "17초 → 0.1초 미만"
      ],
      [
        "오류율",
        "4.55% → 0%"
      ]
    ],
    "roles": [
      "REST API 및 데이터베이스 설계 · Spring Boot 기반 API 구조를 설계하고, PostgreSQL ERD를 작성하여 아동별 게임 데이터와 훈련 기록 관리 기능 구현",
      "게임 데이터 관리 기능 개발 · 게임 유형과 난이도에 따라 문제 데이터를 생성·수정·조회할 수 있도록 API 및 데이터 처리 로직 구현",
      "학습 통계 조회 성능 개선 · PostgreSQL 쿼리·인덱스와 Redis 조회 구조를 개선하여 평균 API 응답 시간을 17초에서 0.1초 미만으로 단축",
      "서비스 배포 및 웹앱 전환 · AWS EC2·Nginx 환경에 서비스를 배포하고, 앱 심사 지연에 대응해 사용자 테스트가 가능한 웹앱 제공",
      "사용자 피드백 기반 기능 개선 · 상담센터의 피드백을 반영해 게임 난이도 및 조작 방식 개선에 참여하고, 프론트엔드 API 연동 조율"
    ],
    "cases": [
      {
        "title": "학습 통계 조회 API 성능 개선",
        "problem": "상담사가 아동별 학습 통계를 조회할 때 평균 17초의 응답 지연과 4.55%의 오류가 발생해 결과 확인에 어려움이 있었습니다.",
        "cause": "통계 조회 과정의 SQL 실행, 데이터 접근 및 반복 조회 구간을 점검했습니다. 불필요한 DB 연산과 데이터 처리 흐름을 개선 대상으로 선정했습니다.",
        "solution": "PostgreSQL 조회 쿼리 및 인덱스를 개선하고, Redis를 활용한 반복 조회 처리 방식을 최적화했습니다. 데이터 처리 및 예외 처리 흐름도 함께 점검했습니다.",
        "result": "평균 API 응답 시간을 17초에서 0.1초 미만으로 단축했으며, 측정한 오류율을 4.55%에서 0%로 개선했습니다.",
        "comparison": {
          "before": [
            "통계 조회 요청",
            "DB 조회 및 데이터 처리",
            "응답 지연과 오류"
          ],
          "after": [
            "통계 조회 요청",
            "쿼리·인덱스 개선",
            "Redis 반복 조회 최적화"
          ],
          "beforeResult": "평균 API 응답 17초",
          "afterResult": "평균 API 응답 0.1초 미만"
        },
        "note": "설명용 개념도 · 실제 병목 원인과 캐시 처리 경로 확인 후 보완 예정",
        "evidence": [
          [
            "assets/iroun-api-before.png",
            "컬럼 추가 X · 인덱스 추가 · T50"
          ],
          [
            "assets/iroun-api-after.png",
            "컬럼 추가 · 인덱스 추가 · T50"
          ]
        ],
        "evidenceSummary": "첨부 측정: 각 500건 · 평균 API 응답 49ms → 11ms · 처리량 47.8 → 50.5/sec · 오류율 양쪽 0%. 기존 17초 사례와 동일 조건인지는 확인 예정."
      },
      {
        "title": "앱 심사 지연에 따른 웹앱 전환",
        "problem": "상담센터 사용자 테스트 일정이 정해져 있었지만, 모바일 앱 심사가 지연되면서 예정된 날짜에 서비스를 제공하기 어려운 상황이 발생했습니다.",
        "cause": "기능 개발 자체의 문제보다 앱 배포 및 심사 절차가 일정에 영향을 주고 있었습니다. 기존 배포 방식을 유지하면 사용자 피드백 수집까지 늦어질 가능성이 있었습니다.",
        "solution": "배포 방식보다 예정된 서비스 검증을 우선했습니다. 별도 설치 없이 URL로 접근하는 웹앱으로 전환하고, AWS EC2·Nginx에서 태블릿의 핵심 게임 기능을 사용할 수 있도록 조정했습니다.",
        "result": "앱 심사 완료를 기다리지 않고 예정된 상담센터 사용자 테스트를 진행했습니다. 피드백을 바탕으로 시간제한과 드래그 조작 등 게임 사용성을 개선했습니다.",
        "deployment": true
      }
    ],
    "focus": "백엔드 설계·개발, 데이터베이스 설계, 성능 개선 및 배포",
    "stackGroups": {
      "Backend": [
        "Java",
        "Spring Boot",
        "REST API"
      ],
      "Database": [
        "PostgreSQL",
        "Redis"
      ],
      "Frontend": [
        "React"
      ],
      "Infrastructure": [
        "AWS EC2",
        "Nginx"
      ],
      "AI · 연동 범위 확인 예정": [
        "Python",
        "FastAPI"
      ]
    },
    "features": [
      [
        "인지 훈련",
        "아동별 게임 수행"
      ],
      [
        "학습 결과",
        "훈련 기록 및 통계"
      ],
      [
        "현장 실증",
        "상담센터 피드백"
      ]
    ],
    "roleDetails": [
      [
        "REST API 및 데이터베이스 설계",
        "Spring Boot 기반 API 구조를 설계하고, PostgreSQL ERD를 작성하여 아동별 게임 데이터와 훈련 기록 관리 기능 구현"
      ],
      [
        "게임 데이터 관리 기능 개발",
        "게임 유형과 난이도에 따라 문제 데이터를 생성·수정·조회할 수 있도록 API 및 데이터 처리 로직 구현"
      ],
      [
        "학습 통계 조회 성능 개선",
        "PostgreSQL 쿼리·인덱스와 Redis 조회 구조를 개선하여 평균 API 응답 시간을 17초에서 0.1초 미만으로 단축"
      ],
      [
        "서비스 배포 및 웹앱 전환",
        "AWS EC2·Nginx 환경에 서비스를 배포하고, 앱 심사 지연에 대응해 사용자 테스트가 가능한 웹앱 제공"
      ],
      [
        "사용자 피드백 기반 기능 개선",
        "상담센터의 피드백을 반영해 게임 난이도 및 조작 방식 개선에 참여하고, 프론트엔드 API 연동 조율"
      ]
    ],
    "metricDetails": [
      [
        "평균 API 응답 시간",
        "0.1초 미만",
        "기존 17초",
        "쿼리·인덱스 및 반복 조회 최적화"
      ],
      [
        "측정 오류율",
        "0%",
        "기존 4.55%",
        "예정된 상담센터 사용자 테스트 진행"
      ]
    ]
  },
  "events": {
    "description": "식당 전체의 평점만으로는 개별 메뉴에 대한 평가를 확인하기 어렵다는 점에 착안해 개발한 메뉴 중심 리뷰 플랫폼입니다.\n\n사용자가 메뉴별 리뷰와 평점을 공유하고, SNS 피드·팔로우·즐겨찾기를 통해 음식 정보를 탐색할 수 있도록 구현했습니다. 또한 GPT-4o-mini를 활용해 자연어 검색어에서 지역·카테고리·메뉴·태그 등의 조건을 추출하고, 해당 조건에 맞는 식당을 추천하는 기능을 개발했습니다.",
    "stack": [
      "Java",
      "Spring Boot",
      "MyBatis",
      "Vue 3",
      "MySQL 8",
      "JWT",
      "GPT-4o-mini",
      "Kakao Local API",
      "Kakao Maps",
      "AWS EC2"
    ],
    "subtitle": "메뉴 리뷰 기반 SNS 서비스",
    "period": "2025.11.07 ~ 2025.12.26",
    "members": "2명",
    "erd": "assets/hosu-erd.png",
    "architecture": "assets/hosu-architecture.png",
    "category": "관통 프로젝트",
    "title": "HOSU",
    "roleTitle": "서비스 기획 · 풀스택 개발 · AI 검색 기능 설계 및 구현",
    "metrics": [
      [
        "검색 데이터 기반",
        "음식점 약 2만 건"
      ]
    ],
    "roles": [
      "서비스 기획 및 핵심 기능 개발 · 메뉴 중심 리뷰 서비스의 기능을 설계하고, Vue 3와 Spring Boot를 활용해 리뷰·평점·SNS 피드·팔로우·즐겨찾기 기능 구현",
      "공공데이터 가공 및 검색 데이터 구축 · 약 2만 건의 음식점 CSV 데이터를 서비스 DB 구조에 맞게 가공하고, 14종 ENUM을 활용해 검색 조건 분류 기준 구성",
      "AI 자연어 검색 기능 개발 · GPT-4o-mini로 지역·카테고리·메뉴·태그를 추출하고, Spring Boot에서 MyBatis 검색 로직과 연동",
      "위치 기반 음식점 탐색 구현 · Kakao Local API 및 Kakao Maps를 활용해 지역별 음식점 검색과 지도 기반 탐색 기능 구현",
      "인증 및 서비스 배포·유지보수 · JWT 기반 사용자 인증 기능 구현 및 AWS EC2 서비스 배포·운영·유지보수"
    ],
    "cases": [
      {
        "title": "AI 자연어 검색 조건 구조화",
        "problem": "사용자가 “대전에서 혼자 먹기 좋은 한식집”처럼 복합 조건으로 검색하면, 키워드만으로 지역·음식 종류·태그를 구분하기 어려웠습니다.",
        "cause": "자유로운 자연어 표현과 MySQL의 정형 데이터 사이에 검색 조건 변환 과정이 필요했습니다.",
        "solution": "GPT-4o-mini로 시·도, 시·군·구, 카테고리, 메뉴, 태그를 추출했습니다. Spring Boot에서 조건을 처리하고 MyBatis 동적 SQL로 음식점을 조회했습니다.",
        "result": "지역·카테고리·메뉴·태그를 조합한 자연어 검색과 조건에 맞는 음식점 최대 5개 추천을 구현했습니다.",
        "searchFlow": true
      },
      {
        "title": "데이터 설계 사례 | 공공데이터 가공 및 검색 데이터 구축",
        "labels": [
          "배경",
          "설계 과제",
          "구현 과정",
          "결과"
        ],
        "problem": "위치와 음식 종류별 검색을 위해 일관된 분류 데이터가 필요했습니다. 공공데이터 포털의 약 2만 건의 음식점 CSV를 활용했습니다.",
        "cause": "지역·카테고리 검색 조건에 연결하고, 일반 검색과 AI 자연어 검색이 함께 사용하는 데이터 구조가 필요했습니다.",
        "solution": "CSV를 서비스 DB 구조에 맞게 가공하고 지역·카테고리 분류 기준을 정리했습니다. 14종 ENUM 분류 값을 구성해 MySQL에 적재하고, MyBatis 동적 검색 및 Kakao Local API와 연계했습니다.",
        "result": "약 2만 건의 음식점 데이터를 확보하고, 일반 검색과 AI 자연어 검색에서 공통으로 활용하는 검색 기반을 구축했습니다."
      }
    ],
    "focus": "서비스 기획, 백엔드·프론트엔드 개발, 배포 및 유지보수",
    "stackGroups": {
      "Backend": [
        "Java",
        "Spring Boot",
        "MyBatis"
      ],
      "Frontend": [
        "Vue 3"
      ],
      "Database": [
        "MySQL 8"
      ],
      "Authentication": [
        "JWT"
      ],
      "AI / API": [
        "GPT-4o-mini",
        "Kakao Local API",
        "Kakao Maps"
      ],
      "Infrastructure": [
        "AWS EC2"
      ]
    },
    "features": [
      [
        "메뉴별 리뷰",
        "평점·사진·후기"
      ],
      [
        "SNS 기능",
        "피드·팔로우·즐겨찾기"
      ],
      [
        "AI 자연어 검색",
        "복합 조건 추출·추천"
      ]
    ],
    "roleDetails": [
      [
        "서비스 기획 및 핵심 기능 개발",
        "메뉴 중심 리뷰 서비스의 기능을 설계하고, Vue 3와 Spring Boot를 활용해 리뷰·평점·SNS 피드·팔로우·즐겨찾기 기능 구현"
      ],
      [
        "공공데이터 가공 및 검색 데이터 구축",
        "약 2만 건의 음식점 CSV 데이터를 서비스 DB 구조에 맞게 가공하고, 14종 ENUM을 활용해 검색 조건 분류 기준 구성"
      ],
      [
        "AI 자연어 검색 기능 개발",
        "GPT-4o-mini로 지역·카테고리·메뉴·태그를 추출하고, Spring Boot에서 MyBatis 검색 로직과 연동"
      ],
      [
        "위치 기반 음식점 탐색 구현",
        "Kakao Local API 및 Kakao Maps를 활용해 지역별 음식점 검색과 지도 기반 탐색 기능 구현"
      ],
      [
        "인증 및 서비스 배포·유지보수",
        "JWT 기반 사용자 인증 기능 구현 및 AWS EC2 서비스 배포·운영·유지보수"
      ]
    ],
    "metricDetails": [
      [
        "검색 데이터",
        "약 2만 건",
        "복합 조건 검색 · 최대 5개 추천",
        "일반 검색과 AI 검색의 공통 데이터 기반"
      ]
    ]
  },
  "hear4you": {
    "subtitle": "AI 기반 아이 울음소리 감지 및 분류 시스템",
    "period": "2024.09 ~ 2024.12",
    "members": "1명 (개인 프로젝트)",
    "description": "청각장애 보호자가 아이의 울음소리를 인지하고 상황에 대응할 수 있도록 개발한 AI 기반 알림 시스템입니다.\n\nRaspberry Pi와 USB 마이크를 통해 울음소리를 수집하고, AST 기반 AI 모델로 배고픔·복통·불편함·졸림의 4가지 유형을 분류합니다. 분석 결과는 Bluetooth를 통해 Android 앱으로 전달하며, 보호자가 앱을 사용하지 않는 상황에서도 알림을 확인할 수 있도록 구현했습니다.",
    "stack": [
      "Python",
      "AST",
      "Conv1D",
      "Dense",
      "Raspberry Pi",
      "USB Microphone",
      "Android",
      "Java",
      "Foreground Service",
      "Bluetooth"
    ],
    "hardware": "assets/hear4you-hardware.png",
    "components": [
      [
        "LM393 소리 감지 센서",
        "일정 dB 이상의 소리를 감지"
      ],
      [
        "Raspberry Pi 4B",
        "센서 가동 및 AI 프로그램 실행"
      ],
      [
        "USB 마이크",
        "아이 울음소리 데이터 획득"
      ]
    ],
    "architecture": "assets/hear4you-architecture.png",
    "category": "개인 프로젝트",
    "title": "Hear4You",
    "roleTitle": "AI 모델 개발 · 음성 데이터 처리 · IoT·Android 시스템 연동",
    "metrics": [
      [
        "분류 정확도",
        "45.3% → 62.8%"
      ],
      [
        "정확도 향상",
        "+17.5%p"
      ]
    ],
    "roles": [
      "AI 울음소리 분류 모델 개선 · AST 기반 음성 분류 모델에 Conv1D·Dense 계층을 결합하여 4가지 울음 유형을 분류하고, 정확도를 45.3%에서 62.8%로 개선",
      "Raspberry Pi 기반 음성 수집 구현 · USB 마이크로 아이의 울음소리를 수집하고, Python을 활용해 AI 모델 입력에 필요한 음성 데이터 전처리 기능 구현",
      "AI 추론 파이프라인 구성 · 음성 입력부터 특징 추출, AI 추론, 분류 결과 생성까지 이어지는 데이터 처리 흐름 구현",
      "Bluetooth 기반 기기 간 통신 구현 · Raspberry Pi에서 생성한 울음 유형 분류 결과를 Bluetooth로 Android 앱에 전달하는 통신 기능 구현",
      "Android 백그라운드 알림 구현 · Foreground Service를 활용해 앱이 백그라운드에 있는 상황에서도 분석 결과를 수신하고 보호자에게 알림 제공"
    ],
    "cases": [
      {
        "title": "AI 울음소리 분류 정확도 개선",
        "labels": [
          "문제",
          "분석·개선 방향",
          "해결",
          "결과"
        ],
        "problem": "초기 모델의 정확도가 45.3%에 머물러 배고픔·복통·불편함·졸림의 4가지 유형을 구분하는 데 한계가 있었습니다.",
        "cause": "음높이와 강도가 시간에 따라 변하므로 시간적 변화도 고려해야 한다고 판단했습니다. AST 특징 추출에 추가 계층을 적용하는 방향으로 개선했습니다.",
        "solution": "AST에 Conv1D·Dense 계층을 결합해 음성 특징을 추가 학습하고 4가지 유형을 분류하도록 변경했습니다. 기존 모델과 개선 모델의 정확도를 비교했습니다.",
        "result": "정확도 45.3% → 62.8% (+17.5%p). 특징 추출뿐 아니라 후속 분류 계층 설계의 중요성을 확인했습니다.",
        "comparison": {
          "before": [
            "Audio Input",
            "AST",
            "Classification"
          ],
          "after": [
            "Audio Input",
            "AST",
            "Conv1D + Dense",
            "Classification"
          ],
          "beforeResult": "45.3%",
          "afterResult": "62.8%"
        },
        "note": "개념적 구조 비교입니다. 실제 학습 코드의 계층 연결·텐서 차원은 확인 후 보완합니다."
      },
      {
        "title": "시스템 설계 사례 | Raspberry Pi–Android 결과 전달",
        "labels": [
          "설계 배경",
          "구현 과정",
          "기술적 고려",
          "결과"
        ],
        "problem": "분석 결과를 스마트폰에 전달하고, 앱을 직접 실행하지 않는 상황에서도 보호자에게 알림을 제공할 구조가 필요했습니다.",
        "cause": "Python 음성 수집·AI 추론을 Raspberry Pi에 구성하고, Bluetooth로 Android 앱에 분류 결과를 전송해 유형별 알림을 표시했습니다.",
        "solution": "Raspberry Pi는 AI 추론, Android는 결과 수신과 알림을 담당하도록 분리했습니다. Foreground Service로 앱 화면과 별도로 Bluetooth 수신이 동작하도록 구성했습니다.",
        "result": "별도 클라우드 서버 없이 Raspberry Pi에서 생성한 분석 결과를 Android 앱으로 전달하는 시스템을 구현했습니다.",
        "deviceFlow": true
      }
    ],
    "focus": "AI 모델 개선, Raspberry Pi 연동, Android 앱 개발",
    "stackGroups": {
      "AI": [
        "Python",
        "AST",
        "Conv1D",
        "Dense"
      ],
      "Hardware": [
        "Raspberry Pi",
        "USB Microphone"
      ],
      "Mobile": [
        "Android",
        "Java",
        "Foreground Service"
      ],
      "Communication": [
        "Bluetooth"
      ]
    },
    "overviewMetrics": [
      [
        "AI 분류 정확도",
        "62.8%",
        "기존 45.3%"
      ],
      [
        "정확도 개선",
        "+17.5%p",
        "모델 구조 개선"
      ],
      [
        "분류 대상",
        "4가지",
        "울음 유형 분류"
      ]
    ],
    "roleDetails": [
      [
        "AI 울음소리 분류 모델 개선",
        "AST 기반 음성 분류 모델에 Conv1D·Dense 계층을 결합하여 4가지 울음 유형을 분류하고, 정확도를 45.3%에서 62.8%로 개선"
      ],
      [
        "Raspberry Pi 기반 음성 수집 구현",
        "USB 마이크로 아이의 울음소리를 수집하고, Python을 활용해 AI 모델 입력에 필요한 음성 데이터 전처리 기능 구현"
      ],
      [
        "AI 추론 파이프라인 구성",
        "음성 입력부터 특징 추출, AI 추론, 분류 결과 생성까지 이어지는 데이터 처리 흐름 구현"
      ],
      [
        "Bluetooth 기반 기기 간 통신 구현",
        "Raspberry Pi에서 생성한 울음 유형 분류 결과를 Bluetooth로 Android 앱에 전달하는 통신 기능 구현"
      ],
      [
        "Android 백그라운드 알림 구현",
        "Foreground Service를 활용해 앱이 백그라운드에 있는 상황에서도 분석 결과를 수신하고 보호자에게 알림 제공"
      ]
    ],
    "metricDetails": [
      [
        "AI 모델 정확도",
        "45.3% → 62.8%",
        "17.5%p 개선",
        "AST + Conv1D·Dense 구조 개선"
      ],
      [
        "시스템 구현 범위",
        "AI → IoT → Android",
        "음성 수집부터 모바일 알림까지 연동",
        "Bluetooth 기반 분석 결과 전달"
      ]
    ]
  }
};
