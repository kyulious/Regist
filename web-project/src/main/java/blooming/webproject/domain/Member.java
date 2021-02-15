package blooming.webproject.domain;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity

public class Member {

    @Id
    @GeneratedValue
    @Column(name ="member_id")
    private Long id;

    private String name;

    private String password;

    private String email;

    private Long point;

    private boolean admin;

    private Long level;

    @OneToMany(mappedBy = "member")
    private List<Board> Boards = new ArrayList<>();


}
