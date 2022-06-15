import React, { Component, Fragment } from 'react';

type Props = {
    class?: string;
    media: 'image' | 'video';
    src: string | string[];
    alt?: string;
    width?: string;
    height?: string;
    attr?: {
        controls?: boolean;
        autoplay?: boolean;
        muted?: boolean;
        loop?: boolean;
        poster?: string;
        preload: 'auto' | 'metadata' | 'none';
    };
};

/**
 * Component of media objects.
 * @class Media
 * @extends Component
 */
export default class Media extends Component<Props> {
    /**
     * Create a media element.
     * @param {string} class Name of class.
     * @param {image | video} media Type of media.
     * @param {string | string[]} src Sources of media.
     * @param {string} alt Name of image.
     * @param {string} width Width of media.
     * @param {string} height Height of media.
     * @param {object} attr Attributes of video.
     */
    class?: string;
    #media: 'image' | 'video';
    #src: string | string[];
    #alt?: string;
    #width?: string;
    #height?: string;
    #attr?: {
        controls?: boolean;
        autoplay?: boolean;
        muted?: boolean;
        loop?: boolean;
        poster?: string;
        preload?: 'auto' | 'metadata' | 'none';
    };

    constructor(props: Props) {
        super(props);
        this.#media = props.media;
        this.#src = props.src;
        this.#alt = props.alt;
        this.#width = props.width;
        this.#height = props.height;
        this.#attr = props.attr;
        this.class = props.class;
    }

    /**
     * Get image element.
     * @access private
     * @return {JSX.Element} Image component.
     */
    #getImage(): JSX.Element {
        if (this.#src && !Array.isArray(this.#src)) {
            const attributes: any = { src: this.#src.trim() };
            this.#alt
                ? (attributes.alt = this.#alt.trim())
                : (attributes.alt = this.#src
                      .trim()
                      .slice(
                          !this.#src.lastIndexOf('/')
                              ? this.#src.lastIndexOf('.') - this.#src.length
                              : this.#src.lastIndexOf('/') + 1,
                          this.#src.lastIndexOf('.')
                      ));
            (this.#width || this.#height) &&
                (attributes.style = { width: this.#width } || {
                    height: this.#height,
                });
            this.class && (attributes.className = this.class);
            return <img {...attributes} />;
        } else {
            return <p>Source of the image is missing!</p>;
        }
    }

    /**
     * Set sources of video.
     * @access private
     * @return {JSX.Element | JSX.Element[]} source element of video.
     */
    #setVideoSource(): JSX.Element | JSX.Element[] {
        if (this.#src && !Array.isArray(this.#src)) {
            return (
                <source
                    key={this.#src.trim()}
                    src={this.#src
                        .trim()
                        .slice(this.#src.trim().lastIndexOf('.') + 1)}
                />
            );
        } else if (this.#src && Array.isArray(this.#src)) {
            return this.#src.map((el) => (
                <source
                    key={el.trim()}
                    src={el.trim().slice(el.trim().lastIndexOf('.') + 1)}
                />
            ));
        } else {
            return <p>Sources of the video is missing!</p>;
        }
    }

    /**
     * Get video element.
     * @access private
     * @return {JSX.Element} video element.
     */
    #getVideo(): JSX.Element {
        const attributes: any = this.#attr ? this.#attr : {};
        this.#width && (attributes.width = this.#width);
        this.class && (attributes.className = this.class);
        if (this.#height) attributes.height = this.#height;

        return <video {...attributes}>{this.#setVideoSource()}</video>;
    }

    /**
     * Create media component.
     * @access private
     * @return {JSX.Element} Media component.
     */
    #createMedia(): JSX.Element {
        switch (this.#media) {
            case 'image':
                return this.#getImage();
            case 'video':
                return this.#getVideo();
            default:
                return <p>Format of media is missing!</p>;
        }
    }

    /**
     * @return {JSX.Element} Media
     */
    render(): JSX.Element {
        return <Fragment>{this.#createMedia()}</Fragment>;
    }
}
