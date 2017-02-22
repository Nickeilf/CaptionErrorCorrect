package controller;

/**
 * Created by nick on 16/9/23.
 */

import org.apache.commons.fileupload.disk.DiskFileItem;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartFile;
import org.springframework.web.servlet.ModelAndView;
import processor.Transfer;

import java.io.File;

/**
 * Created by dzkan on 2016/3/8.
 */
@Controller
public class mainController {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    @ResponseBody
    public ModelAndView index() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("index");
        return mv;
    }

    @RequestMapping(value = "/upload", method = RequestMethod.POST)
    @ResponseBody
    public String[][] upload(@RequestParam("caption")MultipartFile caption){

        System.out.println(caption==null);


//        CommonsMultipartFile cf = (CommonsMultipartFile)caption;
//        //这个myfile是MultipartFile的
//        DiskFileItem fi = (DiskFileItem) cf.getFileItem();
//        File capFile = fi.getStoreLocation();
//
//        CommonsMultipartFile cf2 = (CommonsMultipartFile)log;
//        //这个myfile是MultipartFile的
//        DiskFileItem fi2 = (DiskFileItem) cf2.getFileItem();
//        File logFile = fi2.getStoreLocation();
//
//        Transfer t = new Transfer();
//        String[][] list = t.getErrorList(capFile,logFile);
//
//
//        int x=list.length;
//        int y = list[0].length;
//
//        for(int i=0;i<x;i++){
//            for(int j =0;j<y;j++){
//                System.out.println(list[i][j]);
//            }
//        }

        return null;
    }
}