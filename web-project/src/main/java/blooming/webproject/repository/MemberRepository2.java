package blooming.webproject.repository;

import blooming.webproject.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository2 extends JpaRepository<Member,Long> {
}
