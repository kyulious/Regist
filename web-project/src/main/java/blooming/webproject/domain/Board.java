package blooming.webproject.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "boards")
@Getter@Setter
public class Board {

    @Id@GeneratedValue
    @Column(name = "board_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    private String name;

    private Long hits;

    private Date upload_date;

    private Date update_date;

    public void setMember(Member member){
        this.member = member;
        member.getBoards().add(this);
    }


}
