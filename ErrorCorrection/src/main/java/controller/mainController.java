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

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;

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
    public String[][] upload(@RequestParam("caption")MultipartFile caption, @RequestParam("log")MultipartFile log, HttpServletRequest request){


        String uploadUrl=request.getSession().getServletContext().getRealPath("/");

        String filename = caption.getOriginalFilename();
        String filename2 = log.getOriginalFilename();



        File dir = new File(uploadUrl);
        if (!dir.exists()) {
            dir.mkdirs();
        }

        System.out.println("文件上传到: " + uploadUrl + filename);

        File capFile = new File(uploadUrl + filename);
        File logFile = new File(uploadUrl+filename2);

        if (!capFile.exists()) {
            try {
                capFile.createNewFile();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        if (!logFile.exists()) {
            try {
                logFile.createNewFile();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        try {
            caption.transferTo(capFile);
            log.transferTo(logFile);
        } catch (IllegalStateException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        Transfer t = new Transfer();
        String[][] list = t.getErrorList(capFile,logFile);


        int x=list.length;
        int y = list[0].length;

        return list;
    }
}