env.SLACK_ROOM = 'edge-services'
env.SLACK_ROOM_START = env.SLACK_ROOM
env.SLACK_ROOM_FINISH = env.SLACK_ROOM
env.SLACK_CHANNEL = env.SLACK_ROOM
env.SLACK_MESSAGE = 'idm-self-service build'

uacf_generic_pipeline {
    publish_branches = ['master']
    images = [
        boilerplate: [
            DOCKER_IMAGE_NAME: 'uar-web/boilerplate',
            DOCKER_CONTEXT_PATH: '.',
            DOCKER_FILE: './Dockerfile',
        ],
    ]
    tests = [
        test: [
            TEST_YAML: './docker-compose.test.yml',
            TEST_TARGET: 'ava',
            HAS_JUNIT_REPORT: true,
            HAS_HTML_REPORT: true,
            HTML_REPORT_DIR: './out/coverage'
        ],
        lintjs: [
            TEST_YAML: './docker-compose.test.yml',
            TEST_TARGET: 'lintjs',
            HAS_CHECKSTYLE_REPORT: true,
        ]
    ]
}
