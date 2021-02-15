package blooming.webproject.domain;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "boards")
public class Board {

    @Id
    @GeneratedValue
    @Column(name = "board_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    private String name;

    private Long hits;

    private LocalDateTime upload_date;

    private LocalDateTime update_date;

    private String content;

    public void setMember(Member member){
        this.member = member;
        member.getBoards().add(this);
    }
    @Builder
    public Board(Long id, String name ,String content){
        this.id = id;
        this.name=name;
        this.content=content;
    }
}
