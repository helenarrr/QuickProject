package com.QuickProject.QuickProjectApp.auth;


import com.QuickProject.QuickProjectApp.entity.user.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    private String email;

    private String password;

    private LocalDateTime created_at;

    private boolean enable;

    private String tz;

    private final Role user_role = Role.USER;
}
