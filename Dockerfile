FROM docker.uacf.io/uacf_amzn/nodejs/6_4_onbuild:master

RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
