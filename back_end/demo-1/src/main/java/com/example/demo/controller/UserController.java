package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.mapper.UserMapper;
import com.example.demo.vo.UserVO;

import lombok.AllArgsConstructor;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, methods = {RequestMethod.DELETE,RequestMethod.GET,RequestMethod.HEAD,RequestMethod.OPTIONS,RequestMethod.PATCH,RequestMethod.POST,RequestMethod.PUT,RequestMethod.TRACE } )
@RestController
@RequestMapping("/users")
@AllArgsConstructor
public class UserController {
	
	UserMapper userMapper;
	
	@GetMapping
	public List<UserVO> userList(){
		System.out.println("userMapper.userList()");
		System.out.println("유저리스트 출력 성공");
		return userMapper.userList();
	}
	
	@PostMapping
	void insertUser(@RequestBody UserVO user) {
		userMapper.insertUser(user);
		System.out.println("유저 DB 저장 성공");
	}
	
	@GetMapping("/{id}")
	public UserVO fetchUserByID (@PathVariable int id) {
		System.out.println("userMapper.fetchUserByID(id)");
		UserVO fetchUser = userMapper.fetchUserByID(id);
		return fetchUser;
	}
	
	@PutMapping("/{id}")
	public void updateUser(@PathVariable int id, @RequestBody UserVO user ) {
		
		UserVO updateUser = user;
		System.out.println("업데이트 유저 =>" + updateUser);
		
		updateUser.setId(id);
		updateUser.setFirstName(user.getFirstName());
		updateUser.setLastName(user.getLastName());
		updateUser.setAge(user.getAge());
		updateUser.setSalary(user.getSalary());
		
		userMapper.updateUser(updateUser);
	}
	
	@DeleteMapping("/{id}")
	public void deleteUser(@PathVariable int id) {
		userMapper.deleteUser(id);
		System.out.println("유저 삭제, success");
	}

}
