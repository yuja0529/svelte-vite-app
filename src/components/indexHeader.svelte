<script>
    import { Confetti } from "svelte-confetti"
    import apple from "/images/sorry-apple.png"
</script>

<div class="hbox space-between h(80) bg(#E6F0EF) c(#4B3C2D) p(0/20) font(20) m(0/0/10)">
    <h1>오늘의 할일</h1>
    <!-- <i class="fa-solid fa-carrot c(#4B3C2D)"><Confetti/></i> -->
    <img src={apple}  alt="사과" class="w(30) h(30)">
</div>