<template>
  <div class="doi-content">
    <Header/>
    <NewsArticle/>
    <div class="container-small pt-6">
      <p class="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit malesuada viverra est magna sapien iaculis. Vitae arcu id dignissim enim eget viverra. Integer cras pharetra egestas tempus et volutpat, blandit. Arcu tristique dolor at donec tempor in et dictum vitae. Consectetur ipsum aliquet maecenas elit rhoncus. Cursus vitae duis volutpat condimentum at dignissim rhoncus ut ac. Mauris lobortis lacus tellus risus amet. Vel aliquet bibendum a leo lobortis vulputate. Sit quis quis egestas est amet urna, enim enim.</p>
      <MediaTranscript/>
      <div class="pb-5">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ligula erat pulvinar donec interdum faucibus. Dignissim augue consectetur eget rutrum aliquet amet fringilla ipsum. Fermentum fermentum volutpat tellus sit quam consectetur tempor viverra. Erat lorem dolor accumsan suspendisse nec, tortor, viverra felis quis. Sed adipiscing scelerisque id neque quis fames pretium. Feugiat nisl interdum at massa. Sit nibh suspendisse dolor vitae. Quam bibendum orci pellentesque sagittis ut sed eros, non. </p>
        <p>Gravida orci, turpis urna euismod et, non, commodo. Risus sit adipiscing sed adipiscing tristique. Mauris vulputate nulla pulvinar enim, ac, ut. Blandit maecenas nullam purus scelerisque tortor enim. Sed cursus amet consequat in eget non. Morbi cursus tellus ut blandit euismod pretium. Dolor commodo egestas pellentesque faucibus eget nunc enim volutpat. Tincidunt elementum at porta convallis nunc donec cursus. Id eget vulputate eget quam sit aliquet sed. Tellus ornare bibendum proin nibh vel pellentesque. Netus fermentum eget turpis nunc nibh ut volutpat neque, morbi.
          Morbi cursus tellus ut blandit euismod pretium. Dolor commodo egestas pellentesque faucibus eget nunc enim volutpat. Tincidunt elementum at porta convallis nunc donec cursus. Id eget vulputate eget quam sit aliquet sed. Tellus ornare bibendum proin nibh vel pellentesque.</p>
      </div>
      <figure class="figure">
        <img class="mb-2" :src="$withBase('/images/banner-sample.png')" alt="">
        <figcaption class="figure-caption text-end">Caption Image from Getty images.</figcaption>
      </figure>
      <div class="pb-5">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ligula erat pulvinar donec interdum faucibus. Dignissim augue consectetur eget rutrum aliquet amet fringilla ipsum. Fermentum fermentum volutpat tellus sit quam consectetur tempor viverra. Erat lorem dolor accumsan suspendisse nec, tortor, viverra felis quis. Sed adipiscing scelerisque id neque quis fames pretium. Feugiat nisl interdum at massa. Sit nibh suspendisse dolor vitae. Quam bibendum orci pellentesque sagittis ut sed eros, non. </p>
        <p>Gravida orci, turpis urna euismod et, non, commodo. Risus sit adipiscing sed adipiscing tristique. Mauris vulputate nulla pulvinar enim, ac, ut. Blandit maecenas nullam purus scelerisque tortor enim. Sed cursus amet consequat in eget non. Morbi cursus tellus ut blandit euismod pretium. Dolor commodo egestas pellentesque faucibus eget nunc enim volutpat. Tincidunt elementum at porta convallis nunc donec cursus. Id eget vulputate eget quam sit aliquet sed. Tellus ornare bibendum proin nibh vel pellentesque. Netus fermentum eget turpis nunc nibh ut volutpat neque, morbi.
          Morbi cursus tellus ut blandit euismod pretium. Dolor commodo egestas pellentesque faucibus eget nunc enim volutpat. Tincidunt elementum at porta convallis nunc donec cursus. Id eget vulputate eget quam sit aliquet sed. Tellus ornare bibendum proin nibh vel pellentesque.</p>
      </div>
      <div class="row pb-5 g-4">
        <div class="col-lg-6">
          <figure class="figure">
            <img class="mb-2" :src="$withBase('/images/banner-sample.png')" alt="">
            <figcaption class="figure-caption text-end">Caption Image from Getty images.</figcaption>
          </figure>
        </div>
        <div class="col-lg-6">
          <figure class="figure">
            <img class="mb-2" :src="$withBase('/images/banner-sample.png')" alt="">
            <figcaption class="figure-caption text-end">Caption Image from Getty images.</figcaption>
          </figure>
        </div>
      </div>
      <div class="pb-5">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ligula erat pulvinar donec interdum faucibus. Dignissim augue consectetur eget rutrum aliquet amet fringilla ipsum. Fermentum fermentum volutpat tellus sit quam consectetur tempor viverra. Erat lorem dolor accumsan suspendisse nec, tortor, viverra felis quis. Sed adipiscing scelerisque id neque quis fames pretium. Feugiat nisl interdum at massa. Sit nibh suspendisse dolor vitae. Quam bibendum orci pellentesque sagittis ut sed eros, non. </p>
        <p>Gravida orci, turpis urna euismod et, non, commodo. Risus sit adipiscing sed adipiscing tristique. Mauris vulputate nulla pulvinar enim, ac, ut. Blandit maecenas nullam purus scelerisque tortor enim. Sed cursus amet consequat in eget non. Morbi cursus tellus ut blandit euismod pretium. Dolor commodo egestas pellentesque faucibus eget nunc enim volutpat. Tincidunt elementum at porta convallis nunc donec cursus. Id eget vulputate eget quam sit aliquet sed. Tellus ornare bibendum proin nibh vel pellentesque. Netus fermentum eget turpis nunc nibh ut volutpat neque, morbi.
          Morbi cursus tellus ut blandit euismod pretium. Dolor commodo egestas pellentesque faucibus eget nunc enim volutpat. Tincidunt elementum at porta convallis nunc donec cursus. Id eget vulputate eget quam sit aliquet sed. Tellus ornare bibendum proin nibh vel pellentesque.</p>
      </div>
      <FeaturedCardInline class="pb-6"/>
      <div class="d-flex align-items-center justify-content-between mb-4">
        <div class="display-medium heading-underline">Publications</div>
        <a href="#" class="fw-bold link-icon">Find all <span v-html="linkArrowRight"></span></a>
      </div>
      <div class="row g-4 pb-6">
        <div class="col-lg-6">
          <NavigationCard variant="inline" :text="false"/>
        </div>
        <div class="col-lg-6">
          <NavigationCard variant="inline" :text="false"/>
        </div>
      </div>
      <FeaturedCardInline class="pb-6"/>
      <div class="d-flex align-items-center justify-content-between mb-4">
        <div class="display-medium heading-underline">Title</div>
        <a href="#" class="fw-bold link-icon">Find all <span v-html="linkArrowRight"></span></a>
      </div>
      <div class="row g-4 pb-6">
        <div class="col-md-6 col-lg-4">
          <EventCard/>
        </div>
        <div class="col-md-6 col-lg-4">
          <EventCard/>
        </div>
        <div class="col-md-6 col-lg-4">
          <EventCard/>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-between mb-4">
        <div class="display-medium heading-underline">Case Studies</div>
        <a href="#" class="fw-bold link-icon">Find all <span v-html="linkArrowRight"></span></a>
      </div>
      <div class="row g-4 pb-6">
        <div class="col-md-6 col-lg-4">
          <EditorialCard variant="xs"/>
        </div>
        <div class="col-md-6 col-lg-4">
          <EditorialCard variant="xs"/>
        </div>
        <div class="col-md-6 col-lg-4">
          <EditorialCard variant="xs"/>
        </div>
      </div>
    </div>
    <SecondaryFooter/>
    <Footer/>
  </div>
</template>

<script>
  import linkArrowRight from '../../../public/icons/link-arrow-right.svg?raw'
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  import SecondaryFooter from '../components/SecondaryFooter.vue'
  import NewsArticle from '../components/NewsArticle.vue'
  import MediaTranscript from '../components/MediaTranscript.vue'
  import FeaturedCardInline from '../components/FeaturedCardInline.vue'
  import NavigationCard from '../components/NavigationCard.vue'
  import EventCard from '../components/EventCard.vue'
  import EditorialCard from '../components/EditorialCard.vue'

  export default {
    components: {
      EditorialCard,
      EventCard,
      NavigationCard,
      FeaturedCardInline,
      MediaTranscript,
      NewsArticle,
      SecondaryFooter,
      Footer,
      Header
    },
    data () {
      return {
        linkArrowRight
      }
    }
  }
</script>