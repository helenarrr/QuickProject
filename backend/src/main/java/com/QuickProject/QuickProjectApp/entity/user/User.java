package com.QuickProject.QuickProjectApp.entity.user;

import com.QuickProject.QuickProjectApp.entity.Journal;
import com.QuickProject.QuickProjectApp.entity.Project;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.UUID;

/**
 * Класс для работы с сущностью "user"
 */
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
@Table(name = "users")
public class User implements UserDetails {

    @Id
    @Column(name = "id")
    private UUID id = UUID.randomUUID();
    
    @Column(name = "nickname")
    private String nickname;

    @Column(name = "email")
    private String email;

    @Column(name = "telegram")
    private String telegram;

    @Column(name = "phone")
    private String phone;

    @Column(name = "password")
    private String password;

    @Column(name = "user_role")
    @Enumerated(EnumType.STRING)
    private Role role;

    Role anotherRole = Role.USER;

    @Column(name = "created_at")
    private LocalDateTime created_at;

    @Column(name = "tz")
    private String tz;

    @Column(name = "enable")
    private Boolean enable;

    @Column(name = "project_role")
    private String project_role;

    @Column(name = "portfolio_link")
    private String portfolio_link;

    @Column(name = "photo")
    private byte[] photo;

    @Builder.Default
    @OneToMany(mappedBy = "user")
    private List<Journal> journal = new ArrayList<>();

    @OneToOne(mappedBy = "creator")
    private Project project;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return enable;
    }
}
