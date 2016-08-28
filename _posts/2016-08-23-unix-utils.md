---
layout: post
title: "Unix Utils"
date: 2016-08-23
comments: true
category: general
tags: [unix]
description: Summarizes some useful and common UNIX commands for Debian-based OS.
---

## Useful Unix commands

#### Generally they work in Debian-based distros.

<br>

Tar to file:
```
tar -zcvf tarfile.tar.gz foldername_tocompress
```

Untar to folder:
```
tar zxvf file.tar.gz -C /path/to/somedirectory
```

Open SSH Server - File config:
```
/etc/ssh/sshd_config
```

Restart network:
```
/etc/init.d/networking restart
```

Network usage:
```
slurm -i P2P1
```

Get public IP in a file:
```
wget http://ipinfo.io/ip
```

Add user to sudoers:
```
sudo adduser <username> sudo
```

Disk usage:
```
du -sh /
```

Disk usage in GB:
```
sudo du -h / | grep '[0-9\.]\+G'
```

Disk usage with percentage:
```
df
```

Disk usage by folder:
```
df -h .; du -sh -- * | sort -hr
```

Count files in dir:
```
ls -l | grep -v ^l | wc -l
```

Search text inside files:
```
grep -rnw '/path/to/somewhere/' -e "pattern"
```

Script at system startup:
```
update-rc.d <SCRIPT> defaults
```

Encrypt with SHA256:
```
echo -n "SomethingToEncrypt" | sha256sum
```

Disable service from startup:
```
update-rc.d -f apache2 remove
```

Remove old kernels:
```
dpkg -l 'linux-*' | sed '/^ii/!d;/'"$(uname -r | sed "s/\(.*\)-\([^0-9]\+\)/\1/")"'/d;s/^[^ ]* [^ ]* \([^ ]*\).*/\1/;/[0-9]/!d' | xargs sudo apt-get -y purge
```

Add user with password and home directory:
```
useradd -g users -p testpwd -d /home/testuser -m testuser
```

Firewall:

```
sudo ufw enable/disable
```

```
sudo ufw allow <port>
```

```
sudo ufw status verbose
```
