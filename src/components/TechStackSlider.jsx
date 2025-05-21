import { Box, Heading, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const techStack = [
  { src: 'https://cdn.simpleicons.org/php/white', label: 'PHP' },
  { src: 'https://cdn.simpleicons.org/symfony/white', label: 'Symfony' },
  { src: 'https://cdn.simpleicons.org/laravel/white', label: 'Laravel' },
  { src: 'https://cdn.simpleicons.org/shopware/white', label: 'Shopware 6' },
  { src: 'https://cdn.simpleicons.org/python/white', label: 'Python' },
  { svg: true, label: 'Java' },
  { src: 'https://cdn.simpleicons.org/dotnet/white', label: 'C#' },
  { src: 'https://cdn.simpleicons.org/go/white', label: 'Go' },
  { src: 'https://cdn.simpleicons.org/javascript/white', label: 'JavaScript' },
  { src: 'https://cdn.simpleicons.org/typescript/white', label: 'TypeScript' },
  { src: 'https://cdn.simpleicons.org/react/white', label: 'React' },
  { src: 'https://cdn.simpleicons.org/nextdotjs/white', label: 'Next.js' },
  { src: 'https://cdn.simpleicons.org/vite/white', label: 'Vite' },
  { src: 'https://cdn.simpleicons.org/tailwindcss/white', label: 'Tailwind' },
  { src: 'https://cdn.simpleicons.org/chakraui/white', label: 'Chakra UI' },
  { src: 'https://cdn.simpleicons.org/nginx/white', label: 'Nginx' },
  { src: 'https://cdn.simpleicons.org/docker/white', label: 'Docker' },
  { src: 'https://cdn.simpleicons.org/git/white', label: 'Git' },
  { src: 'https://cdn.simpleicons.org/gitlab/white', label: 'GitLab' },
  { src: 'https://cdn.simpleicons.org/graphql/white', label: 'GraphQL' },
  { src: 'https://cdn.simpleicons.org/mongodb/white', label: 'MongoDB' },
  { src: 'https://cdn.simpleicons.org/mysql/white', label: 'MySQL' },
]

function renderIcon(item) {
  if (item.svg) {
    return (
      <svg className="tech-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.851 18.56s-.917.534.653.714c1.902.151 2.883.13 4.968-.027 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.942-1.333M8.276 15.933s-1.028.761.542.924c2.032.135 3.636.135 5.74-.027 0 0 .384.389.987.602-4.563 1.636-10.195.118-7.269-1.499M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.998c-3.637.89-9.69.89-13.323.151-.744-.151-.453-.605-.151-.755.896-.401.677-.401 1.233-.401 1.902 0 5.79.201 8.4-.151 1.233-.135.888-.601.888-.601M17.116 17.584c4.503 1.333 2.58 2.533-1.233 2.833-3.029.236-7.423.236-9.69 0-1.589-.135-1.233-.534-.917-.755.858-.401.677-.401 1.233-.401 1.902 0 5.79.201 8.4-.151 1.233-.135.888-.601.888-.601M14.401 0s2.494 2.533-2.365 6.3c-3.896 3.029-.888 4.533-.001 6.3-3.274-2.053-3.929-3.858-2.824-5.3 1.644-2.053 5.19-7.3 5.19-7.3M9.734 23.924c4.503.236 10.17.151 10.17-1.333 0-2.533-4.503-2.533-10.17-2.533v3.866zM17.116 14.584c4.503 1.333 2.58 2.533-1.233 2.833-3.029.236-7.423.236-9.69 0-1.589-.135-1.233-.534-.917-.755.858-.401.677-.401 1.233-.401 1.902 0 5.79.201 8.4-.151 1.233-.135.888-.601.888-.601" fill="currentColor"/>
      </svg>
    )
  }
  return <img src={item.src} className="tech-icon" alt={item.label} />
}

export default function TechStackSlider() {
  return (
    <Box as="section" className="space-y-4">
      <Heading as="h3" size="md" className="text-[#FD971F] font-semibold">Tech Stack</Heading>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        className="swiper"
      >
        {techStack.map((item, idx) => (
          <SwiperSlide key={idx} className="swiper-slide flex flex-col items-center gap-2">
            {renderIcon(item)}
            <Text fontSize="sm">{item.label}</Text>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination" />
      </Swiper>
    </Box>
  )
} 