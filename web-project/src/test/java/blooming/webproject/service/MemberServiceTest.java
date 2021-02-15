package blooming.webproject.service;

import blooming.webproject.domain.Member;
import blooming.webproject.repository.MemberRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
@Transactional
class MemberServiceTest {

    @Autowired MemberService memberService;
    @Autowired MemberRepository memberRepository;

    @Test
    public void 회원가입() throws Exception {
        //given
        Member member = new Member();
        member.setName("hhh");
        //when
        Long savedId = memberService.join(member);
        //then

        assertEquals(member, memberRepository.findOne(savedId));

    }
    @Test

    public void 중복_회원_예외() throws Exception {
        //given
        Member member1 = new Member();
        member1.setName("hhh");
        Member member2 = new Member();
        member2.setName("hhh");

        //when
        memberService.join(member1);
        try{
            memberService.join(member2);
        }catch(IllegalStateException e){
            return;
        }

        //then
        fail("Error should occur");
    }

    @Test
    void findMembers() {
    }

    @Test
    void findOne() {
    }
}